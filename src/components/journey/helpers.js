import {store} from '../../store';
import Requirements from './requirements';

import {
  advanceEncounter,
} from '../../reducers/game';


export function advance() {
  store.dispatch(advanceEncounter());
}

export function checkRequirement(state, requirement) {
  const parameters = requirement.slice(1);
  return Requirements[requirement[0]].test(state, ...parameters);
}

export function handleRequirement(state, requirement) {
  const {outcome} = Requirements[requirement[0]];
  const parameters = requirement.slice(1);
  outcome && handleOutcome(outcome(state, ...parameters));
}

export function handleOutcome(outcome) {
  const type = outcome[0];
  const parameters = outcome.slice(1);
  const action = {
    type,
    ...parameters,
  };
  store.dispatch(action);
}
