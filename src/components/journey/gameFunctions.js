import {store} from '../../store';

export const GAME_FUNCTIONS = {
  /**
   * Alert a message.
   * @param {String} message - String to be alerted.
   */
  alert: (message) => {
    alert(message);
  },

  /**
   * Add an arbitrary number of numbers.
   * @return {Number} - The sum.
   */
  sum: (...args) => args.reduce((total, current) => total + current),

  /**
   * Apply an Outcome.
   * @param {Array} outcome - An Array with an Outcome and its parameters.
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
   */
  addCoins: function(...args) {
    GAME_FUNCTIONS.dispatch(['addCoins', ...args]);
  },

  /**
   * Dispatch pushEncounter.
   */
  pushEncounter: function(...args) {
    GAME_FUNCTIONS.dispatch(['pushEncounter', ...args]);
  },

  /**
   * Dispatch pushRandom.
   */
  pushRandom: function(...args) {
    GAME_FUNCTIONS.dispatch(['pushRandom', ...args]);
  },
};
