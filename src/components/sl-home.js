import { LitElement, html } from 'lit-element';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

import testEncounters from './test-encounters.json';

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
    return html`
      ${encounter.text}
      <button @click=${this.continue}>
        ${encounter.choices && encounter.choices[0].text || "Continue..."}
      </button>
    `;
  }
}

window.customElements.define('sl-home', SlHome);
