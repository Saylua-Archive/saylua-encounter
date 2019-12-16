
import {html, css, LitElement} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../store';
import {getInventory} from '../../reducers/game';
import '../journey/sl-journey';

/**
 * An inventory page.
 */
class SlInventory extends connect(store)(LitElement) {
  /** @override */
  static get properties() {
    return {
      _inventory: {type: Array},
      _currentJourney: {type: String},
    };
  }

  /** @override */
  static get styles() {
    return css`
      section {
        display: grid;
        grid-template-columns: repeat(4, minmax(80px, 1fr));
        align-items: center;
        justify-content: space-around;
      }
      .item {
        box-sizing: border-box;
        padding: 0.5em 8px;
      }
    `;
  }

  /** @override */
  render() {
    return html`
      <section>
        ${this._inventory.map(({item, count}) => html`
          <div class="item" title=${item.description}>
            ${item.name}
            ${item.journey ? html`
              <br><button 
                @click=${() => this._showItemJourney(item.journey)}
              >Interact</button>
            `: ''}
            <br>Count: ${count}
          </div>
        `)}
      </section>
      ${this._currentJourney ? html`
        <sl-journey .journeyName=${this._currentJourney}></sl-journey>
      ` : ''}
    `;
  }

  /** @override */
  stateChanged(state) {
    this._inventory = getInventory(state);
  }

  /**
   * @param {string} journey Filename of the journey.
   * @returns {undefined}
   */
  _showItemJourney(journey) {
    this._currentJourney = journey;
  }
}

window.customElements.define('sl-inventory', SlInventory);
