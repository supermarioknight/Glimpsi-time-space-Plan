import 'reset-css/reset.css';
import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import history from './routerHistory';
import App from './components/App';
import NotificationProvider from './components/NotificationProvider';
import registerServiceWorker from './registerServiceWorker';
import Store from './Store';
import './styles';

ReactDOM.render(
  <Store>
    <NotificationProvider>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </NotificationProvider>
  </Store>,
  document.getElementById('root')
);

registerServiceWorker();
