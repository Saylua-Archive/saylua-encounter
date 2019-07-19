import { LitElement, html } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

import testEncounters from './test-encounters.json';

const defaultContinueText = "Continue...";

class SlHome extends LitElement {
  static get properties() {
    return {
      currentEncounter: { type: Number },
    };
  }

  constructor() {
    super();
    this.currentEncounter = 0;
  }

  continue(e) {
    this.currentEncounter = (this.currentEncounter + 1) % testEncounters.length;
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    const encounter = testEncounters[this.currentEncounter];

    const choiceButtons = (encounter.choices && encounter.choices.map(choice => html`
      <button @click=${this.continue}>
        ${choice.text || defaultContinueText}
      </button>
    `)) || html`<button @click=${this.continue}>${defaultContinueText}</button>`;

    return html`
      ${encounter.text}
      ${choiceButtons}
    `;
  }
}

window.customElements.define('sl-home', SlHome);
