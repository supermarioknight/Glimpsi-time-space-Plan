// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './features/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const store = configureStore();
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
