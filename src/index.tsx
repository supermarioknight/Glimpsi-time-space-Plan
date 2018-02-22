import 'reset-css/reset.css';
import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import history from './routerHistory';
import App from './components/App';
import NotificationProvider from './components/NotificationProvider';
import Store from './Store';
import './styles';

// tslint:disable-next-line no-any
(ReactGA.initialize as any)('UA-114397348-1', {
  testMode: process.env.NODE_ENV !== 'production',
});

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
