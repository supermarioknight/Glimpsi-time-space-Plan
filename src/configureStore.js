// @flow

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { compose } from 'redux';
import rootReducer from './features/rootReducer';
import rootEpic from './features/rootEpic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
    ),
  );

  return store;
};
