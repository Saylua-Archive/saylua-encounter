import {LitElement, html, css} from 'lit-element';

const MAP_TILE_WIDTH = 30;
const MAP_TILE_HEIGHT = 30;

class SlDungeon extends LitElement {
  static get properties() {
    return {
      tileGrid: {type: Array},
      objectMap: {type: Object},
      viewWidth: {type: Number},
      viewHeight: {type: Number},
      _row: {type: Number},
      _col: {type: Number},
    };
  }

  static get styles() {
    return [
      css`
        :host {
          postion: relative;
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
    const {rOrigin} = this;
    const {cOrigin} = this;

    return html`
      ${this.renderedTiles.map((row, r) => html`
        <div class="row">
          ${row.map((cell, c) => html`
            <div class="cell" ?isWall=${cell.isWall}>
              ${this.r === rOrigin + r && this.c === cOrigin + c ? html`
                <sl-dungeon-entity type="sprite">
                  <img src="/images/sprites/chirling/saylian.png" />
                </sl-dungeon-entity>
              `: this._renderCellEntities(rOrigin + r, cOrigin + c)}
            </div>
          `)}
        </div>
      `)}
    `;
  }

  _renderCellEntities(r, c) {
    const key = gridKey(r, c);
    if (!this.objectMap.has(key)) return '';

    const object = this.objectMap.get(key);

    switch (object.type) {
      case 'sprite':
        return html`
          <sl-dungeon-entity type="sprite">
            <img src="/images/sprites/vela/saylian.png" />
          </sl-dungeon-entity>`;
      default:
        return '';
    }
  }

  constructor() {
    super();

    this.objectMap = new Map();

    // Everything starts off as a wall.
    this.tileGrid = [...Array(MAP_TILE_HEIGHT)].map(() => {
      return [...Array(MAP_TILE_WIDTH)].map(() => ({isWall: true}));
    });

    this.viewWidth = 15;
    this.viewHeight = 9;
  }

  connectedCallback() {
    super.connectedCallback();

    const startRow = Math.floor(MAP_TILE_HEIGHT / 2);
    const startCol = Math.floor(MAP_TILE_WIDTH / 2);

    depthFirstSearchGeneration(this.objectMap, new Map(),
        this.tileGrid, startRow, startCol, true);

    this._row = startRow;
    this._col = startCol;

    this._boundMoveCharacter = this.moveCharacter.bind(this);
    window.addEventListener('keydown', this._boundMoveCharacter);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener('keydown', this._boundMoveCharacter);
  }

  moveCharacter(e) {
    switch (e.key) {
      case 'a':
      case 'ArrowLeft':
        this.c -= 1;
        e.preventDefault();
        break;
      case 'd':
      case 'ArrowRight':
        this.c += 1;
        e.preventDefault();
        break;
      case 'w':
      case 'ArrowUp':
        this.r -= 1;
        e.preventDefault();
        break;
      case 's':
      case 'ArrowDown':
        this.r += 1;
        e.preventDefault();
        break;
    }
  }

  get rOrigin() {
    return this.r - Math.floor(this.viewHeight / 2);
  }

  get cOrigin() {
    return this.c - Math.floor(this.viewWidth / 2);
  }

  get renderedTiles() {
    const {rOrigin} = this;
    const {cOrigin} = this;

    return [...Array(this.viewHeight)].map((_, i) => {
      const r = rOrigin + i;
      return [...Array(this.viewWidth)].map((_, j) => {
        const c = cOrigin + j;

        if (!isValidTile(this.tileGrid, r, c)) return {isWall: true};

        return this.tileGrid[r][c];
      });
    });
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

function depthFirstSearchGeneration(objectMap, visited, grid,
    row, col, isStart) {
  // Tile not within grid coordinates.
  if (!isValidTile(grid, row, col)) return;

  const visitKey = gridKey(row, col);
  // Tile is already walkable.
  if (visited.has(visitKey)) return;

  visited.set(visitKey, true);

  if (isStart || Math.random() > 0.3) {
    grid[row][col].isWall = false;

    if (!isStart && Math.random() < 0.05) {
      objectMap.set(visitKey, {type: 'sprite'});
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
  return grid[r][c] && !grid[r][c].isWall;
}

function isValidTile(grid, r, c) {
  if (!grid || !grid.length || !grid[0].length) return false;
  if (r >= grid.length || r < 0) return false;
  if (c >= grid[0].length || c < 0) return false;

  return true;
}

window.customElements.define('sl-dungeon', SlDungeon);
