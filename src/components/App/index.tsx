import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import MapTimeline from '../MapTimeline/Connected/Async';
import TripsOverview from '../TripsOverview/Async';
import NetworkNotifier from '../../components/NetworkNotifier/Connected';
import TripStart from '../TripStart/Async';
import timelineSelector from './timelineSelector';

const MapTimelineWithKey = timelineSelector('tripKey')(MapTimeline);

export default () => (
  <AppLayout>
    <Switch>
      <Route path="/" component={TripsOverview} exact />
      <Route path="/start" component={TripStart} />
      <Route path="/:tripKey" component={MapTimelineWithKey} />
    </Switch>

    <NetworkNotifier />
  </AppLayout>
);
