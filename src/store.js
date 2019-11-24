import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import {lazyReducerEnhancer} from 'pwa-helpers/lazy-reducer-enhancer';

import sayluaReducer from './reducers/sayluaReducer';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    (state) => state,
    devCompose(
        lazyReducerEnhancer(combineReducers),
        applyMiddleware(thunk))
);

store.addReducers({
  sayluaReducer,
});
