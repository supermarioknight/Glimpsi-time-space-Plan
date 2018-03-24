import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import * as json from './lib/json';
import { LS_KEY } from './lib/redux';
import rootReducer from './state/rootReducer';
import rootEpic from './state/rootEpic';

// tslint:disable-next-line no-any
const actualWindow = (window.parent || window) as any;
const composeEnhancers = actualWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);

const preload = localStorage.getItem(LS_KEY);

const store = createStore(
  rootReducer,
  preload ? json.parse(preload) : {},
  composeEnhancers(applyMiddleware(epicMiddleware))
);

interface Props {
  children: React.ReactNode;
}

const Store = ({ children }: Props) => <Provider store={store}>{children}</Provider>;

export default Store;
