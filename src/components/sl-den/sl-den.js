import {html, css, LitElement} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../store';

import {spritesInDen} from '../../reducers/game';

/**
 * A sprite den.
 */
class SlDen extends connect(store)(LitElement) {
  /** @override */
  static get properties() {
    return {
      _sprites: {type: Array},
    };
  }

  /** @override */
  static get styles() {
    return css`
      section {
        display: grid;
        grid-template-columns: repeat(5, minmax(100px, 1fr));
        grid-gap: 1%;
        align-items: stretch;
        justify-content: space-around;
        padding: 0.5em 16px;
      }
      .sprite {
        box-sizing: border-box;
        padding: 0.5em 8px;
        background: white;
        text-align: center;
      }
      .sprite img {
        width: 160px;
        height: 160px;
        margin: 0.5em auto;
      }
    `;
  }

  /** @override */
  render() {
    return html`
      <section>
        ${this._sprites.map((sprite) => html`
          <div class="sprite">
            <img src=${sprite.imageUrl} title=${sprite.name} />
            ${sprite.name}
          </div>
        `)}
      </section>
    `;
  }

  /** @override */
  stateChanged(state) {
    this._sprites = spritesInDen(state);
  }
}

window.customElements.define('sl-den', SlDen);
