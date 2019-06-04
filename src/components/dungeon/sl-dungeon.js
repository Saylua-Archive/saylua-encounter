import { LitElement, html, css } from 'lit-element';

const MAP_TILE_WIDTH = 20;
const MAP_TILE_HEIGHT = 10;

class SlDungeon extends LitElement {
  static get properties() {
    return {
      tileMap: Array,
      r: Number,
      c: Number,
    };
  }

  static get styles() {
    return [
      css`
        :host {
          max-width: 100%;
          max-height: 100%;
          overflow: hidden;
        }
        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: no-wrap;
        }
        .cell {
          background: white;
          flex-grow: 0;
          flex-shrink: 0;
          width: 80px;
          height: 60px;
          position: relative;
        }
        .cell[isWall] {
          background: black;
        }
        sl-dungeon-entity {
          width: 80px;
          height: 80px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        img {
          max-width: 100%;
          max-height: 100%;
        }
      `,
    ];
  }

  render() {
    return html`
      ${this.tileMap.map((row, r) => html`
        <div class="row">
          ${row.map((cell, c) => html`
            <div class="cell" ?isWall=${cell}>
              ${this.r === r && this.c === c ? html`
                <sl-dungeon-entity type="sprite">
                  <img src="/images/sprites/chirling/saylian.png" />
                </sl-dungeon-entity>
              `: ''}
            </div>
          `)}
        </div>
      `)}
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.tileMap = [...Array(MAP_TILE_HEIGHT)].map(() => {
      return [...Array(MAP_TILE_WIDTH)].map(() => (Math.random() > 0.5 ? 1 : 0));
    });

    this.r = Math.floor(MAP_TILE_HEIGHT / 2);
    this.c = Math.floor(MAP_TILE_WIDTH / 2);

    this.tileMap[this.r][this.c] = 0;
  }
}

window.customElements.define('sl-dungeon', SlDungeon);
