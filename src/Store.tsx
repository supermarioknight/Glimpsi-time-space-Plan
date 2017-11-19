import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './features/rootReducer';
import rootEpic from './features/rootEpic';

// tslint:disable-next-line no-any
const actualWindow = (window.parent || window) as any;
const composeEnhancers = actualWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

interface Props {
  children: React.ReactNode;
}

const Store = ({ children }: Props) => <Provider store={store}>{children}</Provider>;

export default Store;
