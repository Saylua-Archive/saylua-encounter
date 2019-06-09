import { LitElement, html, css } from 'lit-element';

const MAP_TILE_WIDTH = 20;
const MAP_TILE_HEIGHT = 10;

class SlDungeon extends LitElement {
  static get properties() {
    return {
      tileMap: Array,
      _row: Number,
      _col: Number,
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

    const row = Math.floor(MAP_TILE_HEIGHT / 2);
    const col = Math.floor(MAP_TILE_WIDTH / 2);

    this.tileMap[row][col] = 0;

    this.r = row;
    this.c = col;

    this._boundMoveCharacter = this.moveCharacter.bind(this);
    window.addEventListener('keydown', this._boundMoveCharacter);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener(this._boundMoveCharacter);
  }

  moveCharacter(e) {
    switch (e.key) {
      case 'ArrowLeft':
        this.c -= 1;
        break;
      case 'ArrowRight':
        this.c += 1;
        break;
      case 'ArrowUp':
        this.r -= 1;
        break;
      case 'ArrowDown':
        this.r += 1;
        break;
    }
  }

  set r(r) {
    const c = this._col;

    if (this.isValidTile(r, c)) {
      this._row = r;
    }
  }

  get r() {
    return this._row;
  }

  set c(c) {
    const r = this._row;

    if (this.isValidTile(r, c)) {
      this._col = c;
    }
  }

  get c() {
    return this._col;
  }

  isValidTile(r, c) {
    if (!this.tileMap || !this.tileMap.length || !this.tileMap[0].length) return false;
    if (r >= this.tileMap.length || r < 0) return false;
    if (c >= this.tileMap[0].length || c < 0) return false;
    
    return !this.tileMap[r][c];
  }
}

window.customElements.define('sl-dungeon', SlDungeon);
