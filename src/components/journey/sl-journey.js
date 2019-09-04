import {LitElement, html} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

// These are the shared styles needed by this element.
import {SharedStyles} from '../shared-styles';

import {store} from '../../store';
import {advance, checkRequirement,
  handleRequirement, handleOutcome} from './helpers';

const defaultContinueText = 'Continue...';

class SlJourney extends connect(store)(LitElement) {
  static get properties() {
    return {
      _currentEncounter: {type: Number},
      _journey: {type: Object},
      _gameState: {type: Object},
    };
  }

  continue(e) {
    advance();
  }

  static get styles() {
    return [
      SharedStyles,
    ];
  }

  render() {
    const encounter = this._journey[this._currentEncounter];

    return html`
      ${encounter ? encounter.text : `You have finished your journey.`}
      ${this._renderChoiceButtons(encounter)}
    `;
  }

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
          ${choice.text || defaultContinueText}
        </button>`);
    }
    return html`
      <button @click=${this.continue}>
        ${defaultContinueText}
      </button>`;
  }

  stateChanged(state) {
    this._currentEncounter = state.app.game.currentEncounter;
    this._journey = state.app.game.journey;
    this._gameState = state.app.game;
  }
}

window.customElements.define('sl-journey', SlJourney);
