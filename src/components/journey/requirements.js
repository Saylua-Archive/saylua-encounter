export const REQUIREMENTS = {
  hasCoins: {
    test: (state, coins) => {
      if (state.coins >= coins) {
        return true;
      }
      return false;
    },
  },
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
};