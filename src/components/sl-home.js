import { LitElement, html } from 'lit-element';
import './dungeon/sl-dungeon.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class SlHome extends LitElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <sl-dungeon></sl-dungeon>
    `;
  }
}

window.customElements.define('sl-home', SlHome);
