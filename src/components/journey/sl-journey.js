import { LitElement, html } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared-styles.js';

import testEncounters from './test-encounters.json';

const defaultContinueText = "Continue...";

import { store } from '../../store.js';
import { addCoins } from '../../reducers/app.js';

class SlJourney extends LitElement {
  static get properties() {
    return {
      currentEncounter: { type: Number },
    };
  }

  constructor() {
    super();
    this.currentEncounter = 0;
    this.encounterStack = [];
    this.outcomeFunctions = {
      alert: (message) => alert(message),
      next: (label) => {
        this.pushEncounter(testEncounters.findIndex(e => e.label === label));
      },
      addCoins: (coins) => {
        store.dispatch(addCoins(coins));
      }
    };
  }

  choose(choice) {
    if (choice.outcome) {
      const parameters = choice.outcome.slice(1);
      this.outcomeFunctions[choice.outcome[0]](...parameters);
    }
  }

  continue(e) {
    if (this.encounterStack.length > 0) {
      this.currentEncounter = this.encounterStack.pop();
    } else {
      this.currentEncounter = (this.currentEncounter + 1) % testEncounters.length;
    }
  }

  pushEncounter(encounter) {
    this.encounterStack.push(encounter);
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    const encounter = testEncounters[this.currentEncounter];

    const choiceButtons = (encounter.choices && encounter.choices.map(choice => html`
      <button @click=${() => {
        this.choose(choice);
        this.continue();
      }}>
        ${choice.text || defaultContinueText}
      </button>
    `)) || html`<button @click=${this.continue}>${defaultContinueText}</button>`;

    return html`
      ${encounter.text}
      ${choiceButtons}
    `;
  }
}

window.customElements.define('sl-journey', SlJourney);
