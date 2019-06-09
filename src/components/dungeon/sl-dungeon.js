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

    // Everything starts off as a wall.
    this.tileMap = [...Array(MAP_TILE_HEIGHT)].map(() => {
      return [...Array(MAP_TILE_WIDTH)].map(() => true);
    });

    const startRow = Math.floor(MAP_TILE_HEIGHT / 2);
    const startCol = Math.floor(MAP_TILE_WIDTH / 2);

    this._depthFirstSearchGeneration(new Map(), this.tileMap, startRow, startCol, true);

    this.r = startRow;
    this.c = startCol;

    this._boundMoveCharacter = this.moveCharacter.bind(this);
    window.addEventListener('keydown', this._boundMoveCharacter);
  }

  _depthFirstSearchGeneration(visited, map, row, col, isStart) {
    // Tile not within map coordinates. 
    if (!this.isValidTile(map, row, col)) return;

    const visitKey = `${row}-${col}`;
    // Tile is already walkable.
    if (visited.has(visitKey)) return;

    visited.set(visitKey, true);

    if (isStart || Math.random() > 0.3) {
      map[row][col] = false;

      this._depthFirstSearchGeneration(visited, map, row + 1, col);
      this._depthFirstSearchGeneration(visited, map, row - 1, col);
      this._depthFirstSearchGeneration(visited, map, row, col + 1);
      this._depthFirstSearchGeneration(visited, map, row, col - 1);
    }
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

    if (this.isWalkableTile(this.tileMap, r, c)) {
      this._row = r;
    }
  }

  get r() {
    return this._row;
  }

  set c(c) {
    const r = this._row;

    if (this.isWalkableTile(this.tileMap, r, c)) {
      this._col = c;
    }
  }

  get c() {
    return this._col;
  }

  isWalkableTile(map, r, c) {
    if (!this.isValidTile(map, r, c)) return false;
    return !map[r][c];
  }

  isValidTile(map, r, c) {
    if (!map || !map.length || !map[0].length) return false;
    if (r >= map.length || r < 0) return false;
    if (c >= map[0].length || c < 0) return false;

    return true;
  }
}

window.customElements.define('sl-dungeon', SlDungeon);
