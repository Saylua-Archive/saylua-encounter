import {store} from '../../store';
import {addItems, addCoins, setToken, clearToken, pushEncounter,
  pushRandom, addExperience} from '../../reducers/game';

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
  sum: (...nums) => nums.reduce((total, current) => total + current),

  /**
   * Set a story token.
   * @param {String} token - The key for the token to set.
   * @returns {undefined}
   */
  setToken: function(token) {
    store.dispatch(setToken(token));
  },

  /**
   * Clear a story token.
   * @param {String} token - The key for the token to clear.
   * @returns {undefined}
   */
  clearToken: function(token) {
    store.dispatch(clearToken(token));
  },

  /**
   * Dispatch addItems.
   * @param {number} id - The item id.
   * @param {number} count - The number you gain.
   * @returns {undefined}
   */
  addItems: function(id, count = 1) {
    store.dispatch(addItems(id, count));
  },

  /**
   * Dispatch addCoins.
   * @param {Number} coins - How many coins to add.
   * @returns {undefined}
   */
  addCoins: function(coins) {
    store.dispatch(addCoins(coins));
  },

  /**
   * Dispatch pushEncounter.
   * @param {String} label - The encounter's identifying label.
   * @param {Object} encounterState - Any state that the encounter needs.
   * @returns {undefined}
   */
  pushEncounter: function(label, encounterState) {
    store.dispatch(pushEncounter(label, encounterState));
  },

  /**
   * Dispatch pushRandom.
   * @returns {undefined}
   */
  pushRandom: function(...encounters) {
    store.dispatch(pushRandom(...encounters));
  },

  /**
   * Dispatch addExperience to add experience points to a skill.
   * @param {String} skill - The skill to add the experience to.
   * @param {Number} amount - How much to add.
   * @returns {undefined}
   */
  addExperience: function(skill, amount) {
    store.dispatch(addExperience(skill, amount));
  },
};
