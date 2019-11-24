import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import {lazyReducerEnhancer} from 'pwa-helpers/lazy-reducer-enhancer';

import {game} from './reducers/game';
import {navigation} from './reducers/navigation';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    (state) => state,
    devCompose(
        lazyReducerEnhancer(combineReducers),
        applyMiddleware(thunk))
);

store.addReducers({
  game,
  navigation,
});
