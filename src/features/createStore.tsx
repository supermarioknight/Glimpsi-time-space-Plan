import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

// tslint:disable-next-line no-any
const actualWindow = (window.parent || window) as any;
const composeEnhancers = actualWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (middleware: Middleware[] = [], initialState = {}) => {
  const epicMiddleware = createEpicMiddleware(rootEpic);

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware, ...middleware))
  );
  return store;
};
