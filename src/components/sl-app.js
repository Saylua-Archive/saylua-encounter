import {LitElement, html, css} from 'lit-element';
import {connect} from 'pwa-helpers/connect-mixin';
import {installOfflineWatcher} from 'pwa-helpers/network';
import {installRouter} from 'pwa-helpers/router';
import {updateMetadata} from 'pwa-helpers/metadata';

import './journey/sl-journey';
import './dungeon/sl-dungeon';
import './sl-inventory/sl-inventory';
import './sl-den/sl-den';
import './sl-view404';

// This element is connected to the Redux store.
import {store} from '../store';
import {currentSprite} from '../reducers/game';

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
      _currentSprite: {type: Object},
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
        img {
          max-width: 100%;
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
    const sprite = this._currentSprite;
    if (this._page === 'start') {
      return html`
        <p>The sky is bright.</p>

        <p>You've lived in Sayleus your whole life.</p>

        <p>But there comes a time when life must change.</p>

        <p>You're not sure why, but you know you wanted this.</p>
        
        <p>The train rocks up and down as the wheels turn.</p>

        <p>500 miles away from home.</p>

        <p>Anxiety is a funny thing. Excitement and fear are sometimes 
          hard to tell apart.</p>

        <p>Your hands shake. You know the city will have so many more 
          oportunities than your hometown.</p>

        <p>But won't it be lonely to go somewhere so far away? 
          Without friends?</p>

        <p>It's too late to turn back now.</p>

        <p>You hope that the city is like you wished.</p>

        <p>And that maybe... One day... If the legends are as they say, 
          your wishes could come true.</p>
      `;
    }
    return html`
      <aside>
        <img src=${sprite.imageUrl} title=${sprite.name} />
        <p>Your companion is ${sprite.name}</p>
  
        <p>You have ${this._coins || 'no'} coins.</p>
        <br>
        ${JSON.stringify(this._experience)}
        <br>
        <a href="/inventory">Inventory</a>
        <br>
        <a href="/den">Den</a>
        <br>
        <a href="/quests">Quests</a>
      </aside>

      <nav>
        <a href="/">Home</a>
        <a href="/town">Town</a>
        <a href="/wilderness">Wilderness</a>
        <a href="/cave">The Caves</a>
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
      case 'inventory':
        return html`<sl-inventory></sl-inventory>`;
      case 'den':
        return html`<sl-den></sl-den>`;
      case 'quests':
        return html`The things you're a doing`;
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
    this._currentSprite = currentSprite(state);
  }
}

window.customElements.define('sl-app', SlApp);
