import {store} from '../../store';

export const GAME_FUNCTIONS = {
  /**
   * Alert a message.
   * @param {String} message - String to be alerted.
   * @returns {undefined}
   */
  alert: (message) => {
    alert(message);
  },

  /**
   * Add an arbitrary number of numbers.
   * @returns {Number} - The sum.
   */
  sum: (...args) => args.reduce((total, current) => total + current),

  /**
   * Set a variable in a journey's global state.
   * @returns {undefined}
   */
  set: function(...args) {
    GAME_FUNCTIONS.dispatch(['set', ...args]);
  },

  /**
   * Apply an Outcome.
   * @param {Array} outcome - An Array with an Outcome and its parameters.
   * @returns {undefined}
   */
  dispatch: (outcome) => {
    const type = outcome[0];
    const parameters = outcome.slice(1);
    const action = {
      type,
      ...parameters,
    };
    store.dispatch(action);
  },

  /**
   * Dispatch addCoins.
   * @returns {undefined}
   */
  addCoins: function(...args) {
    GAME_FUNCTIONS.dispatch(['addCoins', ...args]);
  },

  /**
   * Dispatch pushEncounter.
   * @returns {undefined}
   */
  pushEncounter: function(...args) {
    GAME_FUNCTIONS.dispatch(['pushEncounter', ...args]);
  },

  /**
   * Dispatch pushRandom.
   * @returns {undefined}
   */
  pushRandom: function(...args) {
    GAME_FUNCTIONS.dispatch(['pushRandom', ...args]);
  },

  /**
   * Dispatch setToken to set a story token.
   * @returns {undefined}
   */
  setToken: function(...args) {
    GAME_FUNCTIONS.dispatch(['setToken', ...args]);
  },

  /**
   * Dispatch clearToken to clear a story token.
   * @returns {undefined}
   */
  clearToken: function(...args) {
    GAME_FUNCTIONS.dispatch(['clearToken', ...args]);
  },
};
