export const ADD_COINS = 'addCoins';
export const PUSH_ENCOUNTER = 'pushEncounter';
export const PUSH_RANDOM = 'pushRandom';
export const ADVANCE_ENCOUNTER = 'advanceEncounter';
export const ALERT = 'alert';

import fair from '../components/journey/paths/fair.json';

import {randomChoice} from '../utils/utils';

const INITIAL_STATE = {
  coins: 0,
  sprites: [],
  journey: fair,
  encounterStack: [],
  currentEncounter: 0,
  currentSprite: -1,
  inventory: {},
};

export const addCoins = (coins) => {
  return {
    type: ADD_COINS,
    coins,
  };
};

export const pushEncounter = (label) => {
  return {
    type: PUSH_ENCOUNTER,
    label,
  };
};

export const advanceEncounter = () => {
  return {
    type: ADVANCE_ENCOUNTER,
  };
};

/**
 * Lookup the index of the first Encounter in a Journey with a given label.
 * @param {Object} journey - The Journey to search.
 * @param {String} label - The label to search for.
 * @return {Number} - The first matching index.
 */
function findEncounter(journey, label) {
  return journey.findIndex((e) => e.label === label);
}

/**
 * Return a State with an Encounter pushed into its encounterStack.
 * @param {Object} state - The initial Redux state.
 * @param {Number} encounter - The Encounter index to add to the stack.
 * @return {Object} - The new state.
 */
function pushEncounterHelper(state, encounter) {
  const {encounterStack, journey} = state;
  const newStack = encounterStack.slice(0);
  newStack.push(findEncounter(journey, encounter));
  return {
    ...state,
    encounterStack: newStack,
  };
}

/**
 * Convert an Object with Numbers for keys to an Array.
 * @param {Object} obj - The Object to convert.
 * @return {Array} - The new Array.
 */
function numsArray(obj) {
  const keys = Object.keys(obj);
  const arr = [];
  for (let i = 0; i < keys.length; i++) {
    obj[i] && arr.push(obj[i]);
  }
  return arr;
}

/**
 * Gameplay reducer.
 * @param {Object} state - An optional current game Redux state.
 * @param {Object} action - Redux action.
 * @return {Object} - The updated state.
 */
export function game(state = INITIAL_STATE, action) {
  const {encounterStack, currentEncounter, coins, journey} = state;

  switch (action.type) {
    case ALERT:
      alert(action[0]);
      return {...state};
    case ADD_COINS:
      return {
        ...state,
        coins: coins + action[0],
      };
    case ADVANCE_ENCOUNTER:
      if (encounterStack.length > 0) {
        return {
          ...state,
          encounterStack: encounterStack.slice(0, -1),
          currentEncounter: encounterStack[encounterStack.length - 1],
        };
      }
      return {
        ...state,
        currentEncounter: (currentEncounter + 1) % journey.length,
      };
    case PUSH_ENCOUNTER:
      return pushEncounterHelper(state, action[0]);
    case PUSH_RANDOM:
      return pushEncounterHelper(state, randomChoice(numsArray(action)));
    default:
      return state;
  }
}
