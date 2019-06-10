import { LitElement, html, css } from 'lit-element';

const MAP_TILE_WIDTH = 20;
const MAP_TILE_HEIGHT = 10;

class SlDungeon extends LitElement {
  static get properties() {
    return {
      tileGrid: Array,
      objectMap: Object,
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
      ${this.tileGrid.map((row, r) => html`
        <div class="row">
          ${row.map((cell, c) => html`
            <div class="cell" ?isWall=${cell}>
              ${this.r === r && this.c === c ? html`
                <sl-dungeon-entity type="sprite">
                  <img src="/images/sprites/chirling/saylian.png" />
                </sl-dungeon-entity>
              `: this._renderCellEntities(r, c)}
            </div>
          `)}
        </div>
      `)}
    `;
  }

  _renderCellEntities(r, c) {
    const key = gridKey(r, c);
    if (!this.objectMap.has(key)) return '';
  
    const objects = this.objectMap.get(key);

    return html`
      <sl-dungeon-entity type="sprite">
        <img src="/images/sprites/vela/saylian.png" />
      </sl-dungeon-entity>`;
  }

  constructor() {
    super();

    this.objectMap = new Map();

    // Everything starts off as a wall.
    this.tileGrid = [...Array(MAP_TILE_HEIGHT)].map(() => {
      return [...Array(MAP_TILE_WIDTH)].map(() => true);
    });
  }

  connectedCallback() {
    super.connectedCallback();

    const startRow = Math.floor(MAP_TILE_HEIGHT / 2);
    const startCol = Math.floor(MAP_TILE_WIDTH / 2);

    depthFirstSearchGeneration(this.objectMap, new Map(), this.tileGrid, startRow, 
      startCol, true);

    this.r = startRow;
    this.c = startCol;

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

    if (isWalkableTile(this.tileGrid, r, c)) {
      this._row = r;
    }
  }

  get r() {
    return this._row;
  }

  set c(c) {
    const r = this._row;

    if (isWalkableTile(this.tileGrid, r, c)) {
      this._col = c;
    }
  }

  get c() {
    return this._col;
  }
}

function depthFirstSearchGeneration(objectMap, visited, grid, row, col, isStart) {
  // Tile not within grid coordinates. 
  if (!isValidTile(grid, row, col)) return;

  const visitKey = gridKey(row, col);
  // Tile is already walkable.
  if (visited.has(visitKey)) return;

  visited.set(visitKey, true);

  if (isStart || Math.random() > 0.3) {
    grid[row][col] = false;

    if (Math.random() < 0.05) {
      objectMap.set(visitKey, {'type': 'sprite'});
    }

    depthFirstSearchGeneration(objectMap, visited, grid, row + 1, col);
    depthFirstSearchGeneration(objectMap, visited, grid, row - 1, col);
    depthFirstSearchGeneration(objectMap, visited, grid, row, col + 1);
    depthFirstSearchGeneration(objectMap, visited, grid, row, col - 1);
  }
}

function gridKey(row, col) {
  return `${row}-${col}`;
}

function isWalkableTile(grid, r, c) {
  if (!isValidTile(grid, r, c)) return false;
  return !grid[r][c];
}

function isValidTile(grid, r, c) {
  if (!grid || !grid.length || !grid[0].length) return false;
  if (r >= grid.length || r < 0) return false;
  if (c >= grid[0].length || c < 0) return false;

  return true;
}

window.customElements.define('sl-dungeon', SlDungeon);
