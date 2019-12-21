import {html, css, LitElement} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../store';
import {inventory, addItems, addCoins} from '../../reducers/game';
import '../journey/sl-journey';
import {seededRandomInt} from '../../utils/utils';

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
        grid-template-columns: repeat(5, minmax(100px, 1fr));
        grid-gap: 1%;
        align-items: stretch;
        justify-content: space-around;
        padding: 0.5em 16px;
      }
      .item {
        box-sizing: border-box;
        padding: 0.5em 8px;
        background: white;
        text-align: center;
      }
      .item-image {
        overflow: hidden;
        width: 80px;
        height: 80px;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0.5em auto;
      }
    `;
  }

  /** @override */
  render() {
    return html`
      <section>
        ${this._inventory.map(({item, count}) => html`
          <div class="item" title=${item.description}>
            <div 
              class="item-image" 
              style="background: ${this._generateItemColor(item.id)};"
            >
              ${item.name}
            </div>
            ${item.journey ? html`
              <br><button 
                @click=${() => this._showItemJourney(item.journey)}
              >Interact</button>
            `: ''}
            <br><button
              @click=${() => this._sellItem(item)}
            >Sell for ${item.sellPrice} coins</button>
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
    this._inventory = inventory(state);
  }

  /**
   * Generates a random, seeded background color for items without
   * images.
   * @param {number} id the id of the item.
   * @returns {string} an HSL color.
   */
  _generateItemColor(id) {
    const hue = seededRandomInt(id, 360);
    const saturation = seededRandomInt(id + 1, 90, 80);
    const lightness = seededRandomInt(id + 2, 90, 80);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  /**
   * @param {string} journey Filename of the journey.
   * @returns {undefined}
   */
  _showItemJourney(journey) {
    this._currentJourney = journey;
  }

  /**
   * Sells an item.
   * @param {Item} item 
   * @returns {undefined}
   */
  _sellItem(item) {
    store.dispatch(addItems(item.id, -1));
    store.dispatch(addCoins(item.sellPrice));
  }
}

window.customElements.define('sl-inventory', SlInventory);
