import {LitElement, html} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

// These are the shared styles needed by this element.
import {SharedStyles} from '../shared-styles';

import {store} from '../../store';
import {advance, checkRequirement,
  handleRequirement, handleOutcome} from './helpers';

const DEFAULT_CONTINUE_TEXT = 'Continue...';

/**
 * The main Journey component.
 */
class SlJourney extends connect(store)(LitElement) {
  /**
   * Defines LitElement properties.
   */
  static get properties() {
    return {
      _currentEncounter: {type: Number},
      _journey: {type: Object},
      _gameState: {type: Object},
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

  /**
   * Gets shared styles.
   */
  static get styles() {
    return [
      SharedStyles,
    ];
  }

  /**
   * LitElement render function.
   * @return {Object}
   */
  render() {
    const encounter = this._journey[this._currentEncounter];

    return html`
      ${encounter ? encounter.text : `You have finished your journey.`}
      ${this._renderChoiceButtons(encounter)}
    `;
  }

  /**
   * Takes an Encounter and renders the relevant choice buttons.
   * @param {Object} encounter - A JSON-formatted Encounter.
   * @return {String} - Buttons as HTML with appropriate click handlers.
   */
  _renderChoiceButtons(encounter) {
    if (encounter && encounter.choices) {
      const availableChoices = encounter.choices.filter((choice) => {
        return !choice.requirement || checkRequirement(
            this._gameState, choice.requirement);
      }
      );
      return availableChoices.map((choice) =>
        html`<button @click=${() => {
          choice.requirement && handleRequirement(this._gameState,
              choice.requirement);
          choice.outcome && handleOutcome(choice.outcome);
          this.continue();
        }}>
          ${choice.text || DEFAULT_CONTINUE_TEXT}
        </button>`);
    }
    return html`
      <button @click=${this.continue}>
        ${DEFAULT_CONTINUE_TEXT}
      </button>`;
  }

  /**
   * Deals with Redux state changes.
   * @param {Object} state - The updated state.
   */
  stateChanged(state) {
    this._currentEncounter = state.sayluaReducer.game.currentEncounter;
    this._journey = state.sayluaReducer.game.journey;
    this._gameState = state.sayluaReducer.game;
  }
}

window.customElements.define('sl-journey', SlJourney);
