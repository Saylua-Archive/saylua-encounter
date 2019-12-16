import {randomInt} from '../../utils/utils';
import {calculateLevel} from './helpers';

export const REQUIREMENTS = {
  // The state has at least (coins) coins.
  hasCoins: {
    test: (state, coins) => {
      if (state.coins >= coins) {
        return true;
      }
      return false;
    },
  },
  // Cost function that checks if there are enough coins, then removes them.
  takeCoins: {
    test: (state, coins) => {
      if (state.coins >= coins) {
        return true;
      }
      return false;
    },
    outcome: (state, coins) =>
      ['addCoins', -1 * coins],
  },
  // Check if a story token exists and is set to true.
  checkToken: {
    test: (state, token) => {
      return state.storyTokens[token];
    },
  },
  // Check a skill with a d20 roll. Warning: Probabilistic!!!
  skillCheck: {
    test: (state, skill, target) => {
      const level = calculateLevel(state.experience[skill]);
      return Math.floor(level) + randomInt(20, 1) > Math.floor(target);
    },
  },
  // Has a specified percentage chance of passing.
  randomCheck: {
    test: (_state, chance) => {
      return Math.random() <= chance;
    },
  },
  // Invert the provided value.
  not: {
    test: (state, value) => {
      return !value;
    },
  },
  // Check if all the values are true.
  all: {
    test: (state, ...values) => {
      for (let i = 0; i < values.length; i++) {
        if (values[i] !== true) {
          return false;
        }
      }
      return true;
    },
  },
  // Check if any the value is true.
  any: {
    test: (state, ...values) => {
      for (let i = 0; i < values.length; i++) {
        if (values[i] === true) {
          return true;
        }
      }
      return false;
    },
  },
};
