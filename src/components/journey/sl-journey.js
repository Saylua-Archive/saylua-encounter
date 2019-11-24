import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

// These are the shared styles needed by this element.
import {SharedStyles} from '../shared-styles';

import {store} from '../../store';
import {advance, checkRequirement,
  handleRequirement, evaluate} from './helpers';

const DEFAULT_CONTINUE_TEXT = 'Continue...';

/**
 * The main Journey component. Renders the current Encounter that a
 * user is interacting with.
 */
class SlJourney extends connect(store)(LitElement) {
  /** @override */
  static get properties() {
    return {
      _currentEncounter: {type: Number},
      _journey: {type: Object},
      _gameState: {type: Object},
    };
  }

  /** @override */
  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          padding: 0.5em 16px;
          font-size: 24px;
          line-height: 1.5;
        }
        button {
          font-size: 18px;
          width: 70%;
          text-align: left;
          cursor: pointer;
          margin-bottom: 0.5em;
          border: 0;
          background: white;
          padding: 0.5em 8px;
        }
        button:hover {
          text-decoration: underline;
        }
      `,
    ];
  }

  /** @override */
  render() {
    const encounter = this.currentEncounter;

    if (!encounter) {
      return html`
        <p>
          You have finished your journey.
        </p>
      `;
    }

    return html`
      <p>
        ${encounter.text}
      </p>
      ${this._renderChoiceButtons(encounter.choices)}
    `;
  }

  /**
   * Takes an Encounter and renders the relevant choice buttons.
   * @param {Array<Object>} choices - Array of choices.
   * @return {TemplateResult} - Buttons as HTML with appropriate click handlers.
   */
  _renderChoiceButtons(choices) {
    if (!choices || !choices.length) {
      return html`
        <button @click=${this.continue}>
          ${DEFAULT_CONTINUE_TEXT}
        </button>`;
    }
    const availableChoices = choices.filter((choice) => {
      // Conditionally hide choices based on whether the user meets
      // requirements.
      return !choice.requirement || checkRequirement(
          this._gameState, choice.requirement);
    });
    return availableChoices.map((choice, id) =>
      html`
        <button @click=${this._selectChoice(id)}>
          ${choice.text || DEFAULT_CONTINUE_TEXT}
        </button>
      `);
  }

  /**
   * Generates an event handler for running a choice that a user selects.
   * @param {Number} choiceId - The ID of the selected choice.
   * @return {Function} An event handler for running the selected choice.
   */
  _selectChoice(choiceId) {
    const encounter = this.currentEncounter;
    if (!encounter || !encounter.choices) return;
    const choice = encounter.choices[choiceId];
    return (e) => {
      if (choice) {
        choice.requirement && handleRequirement(this._gameState,
            choice.requirement);
        choice.outcome && evaluate(choice.outcome);
      }
      this.continue();
    };
  }

  /**
   * Just calls advance for now.
   * May do more when clicks are more decoupled from Outcomes.
   * @param {Event} e - Click Event.
   */
  continue(e) {
    advance();
  }

  /** @override */
  stateChanged(state) {
    this._currentEncounter = state.sayluaReducer.game.currentEncounter;
    this._journey = state.sayluaReducer.game.journey;
    this._gameState = state.sayluaReducer.game;
  }

  /**
   * Returns the current encounter Object.
   * @return {Object} The encounter a user is currently viewing.
   */
  get currentEncounter() {
    return this._journey[this._currentEncounter];
  }
}

window.customElements.define('sl-journey', SlJourney);
