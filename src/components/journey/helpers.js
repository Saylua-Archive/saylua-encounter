import {store} from '../../store';
import REQUIREMENTS from './requirements';

import {
  advanceEncounter,
} from '../../reducers/game';

/**
 * Advance to the next encounter
 */
export function advance() {
  store.dispatch(advanceEncounter());
}

/**
 * Check if a set of requirements are met by a game state
 * @param {Object} state - A game state to check
 * @param {Object} requirement - An array with a requirement and its parameters
 * @return {boolean} - Whether or not the state passes the requirement
 */
export function checkRequirement(state, requirement) {
  const parameters = requirement.slice(1);
  return REQUIREMENTS[requirement[0]].test(state, ...parameters);
}

/**
 * Apply any outcomes (such as costs) implied by requirements
 * @param {Object} state - A game state to mutate
 * @param {Object} requirement - An array with a requirement and its parameters
 */
export function handleRequirement(state, requirement) {
  const {outcome} = REQUIREMENTS[requirement[0]];
  const parameters = requirement.slice(1);
  outcome && handleOutcome(outcome(state, ...parameters));
}

/**
 * Apply an outcome
 * @param {Object} outcome - An array with an outcome and its parameters
 */
export function handleOutcome(outcome) {
  const type = outcome[0];
  const parameters = outcome.slice(1);
  const action = {
    type,
    ...parameters,
  };
  store.dispatch(action);
}
