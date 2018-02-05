import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import MapTimeline from '../MapTimeline/Connected/Async';
import TripsOverview from '../TripsOverview/Async';
import Store from '../../Store';
import NetworkNotifier from '../../components/NetworkNotifier/Connected';
import TripStart from '../TripStart/Async';

export default () => (
  <Store>
    <AppLayout>
      <Switch>
        <Route path="/" component={TripsOverview} exact />
        <Route path="/start" component={TripStart} />
        <Route path="/:tripKey" component={MapTimeline} />
      </Switch>

      <NetworkNotifier />
    </AppLayout>
  </Store>
);
