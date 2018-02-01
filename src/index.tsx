import 'reset-css/reset.css';
import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Store from './Store';
import './styles';

const history = createHistory();

ReactDOM.render(
  <Store>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Store>,
  document.getElementById('root')
);

registerServiceWorker();
