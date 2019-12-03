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
