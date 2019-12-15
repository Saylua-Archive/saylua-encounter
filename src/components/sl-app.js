import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin';
import {installOfflineWatcher} from 'pwa-helpers/network';
import {installRouter} from 'pwa-helpers/router';
import {updateMetadata} from 'pwa-helpers/metadata';

import './journey/sl-journey';
import './dungeon/sl-dungeon';
import './sl-view404';

// This element is connected to the Redux store.
import {store} from '../store';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
} from '../reducers/navigation';

import './snack-bar';

/**
 * The root component.
 * Installs the router.
 */
class SlApp extends connect(store)(LitElement) {
  /** @override */
  static get properties() {
    return {
      appTitle: {type: String},
      _page: {type: String},
      _snackbarOpened: {type: Boolean},
      _offline: {type: Boolean},
      _coins: {type: Number},
      _experience: {
        type: Object,
      },
    };
  }

  /** @override */
  static get styles() {
    return [
      css`
        :host {
          --sl-nav-height: 50px;
          --sl-sidebar-width: 256px;
          display: block;
          min-width: 100%;
          min-height: 100%;
          display: grid;
          grid-template-areas:
            'sidebar nav'
            'sidebar main';
          grid-template-rows: var(--sl-nav-height) 1fr;
          grid-template-columns: var(--sl-sidebar-width) 1fr;
        }
        aside {
          display: block;
          position: fixed;
          grid-area: sidebar;
          width: var(--sl-sidebar-width);
          z-index: 10;
          background: #d6e0df;
          height: 100%;
          padding: 0.5em 8px;
          box-sizing: border-box;
        }
        nav {
          display: block;
          position: fixed;
          grid-area: nav;
          margin-left: var(--sl-sidebar-width);
          margin-right: -var(--sl-sidebar-width);
          width: 100%;
          height: var(--sl-nav-height);
          background: white;
          box-sizing: border-box;
          z-index: 50;
          padding: 0.5em 8px;
          box-sizing: border-box;
        }
        main {
          box-sizing: border-box;
          padding: 0px;
          grid-area: main;
        }
      `,
    ];
  }

  /** @override */
  render() {
    return html`
      <aside>
        You have ${this._coins || 'no'} coins.
        <br>
        ${JSON.stringify(this._experience)}
      </aside>

      <nav>
        <a href="/">Home</a>
        <a href="/town">Town</a>
        <a href="/wilderness">Wilderness</a>
        <a href="/cave">The Caves</a>
        <a href="/view3">View 3</a>
      </nav>

      <main role="main">
        ${this._renderPage(this._page)}
      </main>

      <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline ? 'offline' : 'online'}.
      </snack-bar>
    `;
  }

  /**
   * Choose which page to render.
   * @param {String} page - The page to render.
   * @returns {TemplateResult} - LitElement render data.
   */
  _renderPage(page) {
    switch (page) {
      case 'home':
        return html`<sl-journey journeyName="quest.json"></sl-journey>`;
      case 'town':
        return html`<sl-journey journeyName="fair.json"></sl-journey`;
      case 'wilderness':
        return html`<sl-journey journeyName="wilderness.json"></sl-journey>`;
      case 'cave':
        return html`<sl-dungeon></sl-dungeon>`;
      case 'view3':
        return html`view 3`;
      default:
        return html`<sl-view404></sl-view404>`;
    }
  }

  /** @override */
  firstUpdated() {
    installRouter((location) =>
      store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
  }

  /** @override */
  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle,
      });
    }
  }

  /** @override */
  stateChanged(state) {
    this._page = state.navigation.page;
    this._offline = state.navigation.offline;
    this._snackbarOpened = state.navigation.snackbarOpened;
    this._coins = state.game.coins;
    this._experience = state.game.experience;
  }
}

window.customElements.define('sl-app', SlApp);
