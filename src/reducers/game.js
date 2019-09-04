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

function findEncounter(journey, label) {
  return journey.findIndex((e) => e.label === label);
}

function pushEncounterHelper(state, encounter) {
  const {encounterStack, journey} = state;
  const newStack = encounterStack.slice(0);
  newStack.push(findEncounter(journey, encounter));
  return {
    ...state,
    encounterStack: newStack,
  };
}

function numsArray(obj) {
  const keys = Object.keys(obj);
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    obj[i] && result.push(obj[i]);
  }
  return result;
}

export default function game(state = INITIAL_STATE, action) {
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