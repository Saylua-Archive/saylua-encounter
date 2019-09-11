import {store} from '../../store';
import REQUIREMENTS from './requirements';

import {
  advanceEncounter,
} from '../../reducers/game';

/**
 * Advance to the next encounter.
 */
export function advance() {
  store.dispatch(advanceEncounter());
}

/**
 * Check if a set of requirements are met by a game Redux state.
 * @param {Object} state - A game Redux state to check.
 * @param {Array} requirement - An Array with a requirement and its parameters.
 * @return {Boolean} - Whether or not the state passes the requirement.
 */
export function checkRequirement(state, requirement) {
  const parameters = requirement.slice(1);
  return REQUIREMENTS[requirement[0]].test(state, ...parameters);
}

/**
 * Apply any Outcomes (such as costs) implied by Requirements.
 * @param {Object} state - A Redux game state to mutate.
 * @param {Array} requirement - An Array with a Requirement and its parameters.
 */
export function handleRequirement(state, requirement) {
  const {outcome} = REQUIREMENTS[requirement[0]];
  const parameters = requirement.slice(1);
  outcome && handleOutcome(outcome(state, ...parameters));
}

/**
 * Apply an Outcome.
 * @param {Array} outcome - An Array with an Outcome and its parameters.
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
