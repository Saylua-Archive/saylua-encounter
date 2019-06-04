import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import './dungeon/sl-dungeon.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class SlHome extends PageViewElement {
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
