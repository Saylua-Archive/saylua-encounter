import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js';
import {installOfflineWatcher} from 'pwa-helpers/network.js';
import {installRouter} from 'pwa-helpers/router.js';
import {updateMetadata} from 'pwa-helpers/metadata.js';

import './journey/sl-journey.js';
import './dungeon/sl-dungeon.js';
import './sl-view404.js';

// This element is connected to the Redux store.
import {store} from '../store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
} from '../reducers/sayluaReducer.js';

import './snack-bar.js';

/**
 * The root component
 * Installs the router
 */
class SlApp extends connect(store)(LitElement) {
  /**
   * Defines LitElement properties
   */
  static get properties() {
    return {
      appTitle: {type: String},
      _page: {type: String},
      _snackbarOpened: {type: Boolean},
      _offline: {type: Boolean},
      _coins: {type: Number},
    };
  }

  /**
   * Gets app styles
   */
  static get styles() {
    return [
      css`
        :host {
          --sl-header-height: 42px;
          display: block;
          min-width: 100%;
          min-height: 100%;
          display: grid;
          grid-template-areas:
            'header header'
            'sidebar main';
          grid-template-rows: var(--sl-header-height) 1fr;
          grid-template-columns: 256px 1fr;
        }
        aside {
          display: block;
          position: fixed;
          grid-area: sidebar;
          width: 256px;
          top: var(--sl-header-height);
          margin-bottom: -var(--sl-header-height);
          z-index: 10;
          background: #d6e0df;
          height: 100%;
        }
        header {
          display: block;
          position: fixed;
          width: 100%;
          grid-area: header;
          height: var(--sl-header-height);
          background: white;
          box-sizing: border-box;
          z-index: 50;
        }
        main {
          box-sizing: border-box;
          padding: 0px;
          grid-area: main;
        }
      `,
    ];
  }

  /**
   * LitElement render function
   * @return {Object}
   */
  render() {
    return html`
      <header>
        <a href="/home">Home Sweet Home</a>
        <a href="/cave">The Caves</a>
        <a href="/view3">View 3</a>
      </header>

      <aside>
        You have ${this._coins || 'no'} coins.
      </aside>

      <main role="main">
        ${this._renderPage(this._page)}
      </main>

      <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline ? 'offline' : 'online'}.
      </snack-bar>
    `;
  }

  /**
   * Choose which page to render
   * @param {String} page - which page to render
   * @return {String} - formatted HTML
   */
  _renderPage(page) {
    switch (page) {
      case 'home':
        return html`<sl-journey></sl-journey>`;
      case 'cave':
        return html`<sl-dungeon></sl-dungeon>`;
      case 'view3':
        return html`view 3`;
      default:
        return html`<sl-view404></sl-view404>`;
    }
  }

  /**
   * Start with routing
   */
  firstUpdated() {
    installRouter((location) =>
      store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
  }

  /**
   * Handle if _page changed
   * @param {Object} changedProps - Props that have been updated
   */
  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle,
      });
    }
  }

  /**
   * Handle if state changed
   * @param {Object} state - the new state
   */
  stateChanged(state) {
    this._page = state.sayluaReducer.navigation.page;
    this._offline = state.sayluaReducer.navigation.offline;
    this._snackbarOpened = state.sayluaReducer.navigation.snackbarOpened;
    this._coins = state.sayluaReducer.game.coins;
  }
}

window.customElements.define('sl-app', SlApp);
