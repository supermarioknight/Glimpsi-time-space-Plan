import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import MapTimeline from '../MapTimeline/Connected/Async';
import TripsOverview from '../TripsOverview/Async';
import NetworkNotifier from '../../components/NetworkNotifier/Connected';
import TripStart from '../TripStart/Async';
import tripSelector from '../../decorators/tripSelector';
import Transition from 'react-transition-group/Transition';
import * as transitions from '../../assets/styles/transitions';

const MapTimelineWithKey = tripSelector('tripKey')(MapTimeline);

const TripsOverviewFade = styled(TripsOverview)`
  ${transitions.fade(100)};
`;

const TripStartFade = styled(TripStart)`
  ${transitions.fade(100)};
`;

const MapTimelineFade = styled(tripSelector('tripKey')(MapTimelineWithKey))`
  ${transitions.fade(100)};
` as any;

export default () => (
  <React.Fragment>
    <Route path="/" exact>
      {({ match }) => (
        <Transition in={!!match} timeout={100} mountOnEnter unmountOnExit appear>
          {(state: transitions.TransitionState) => <TripsOverviewFade state={state} />}
        </Transition>
      )}
    </Route>

    <Route path="/start">
      {({ match }) => (
        <Transition
          in={!!match && match.url.startsWith('/start')}
          timeout={100}
          mountOnEnter
          unmountOnExit
          appear
        >
          {(state: transitions.TransitionState) => <TripStartFade state={state} />}
        </Transition>
      )}
    </Route>

    <Route path="/:tripKey">
      {({ match }) => (
        <Transition
          in={!!match && match.path.startsWith('/:tripKey') && !match.url.startsWith('/start')}
          timeout={100}
          mountOnEnter
          unmountOnExit
          appear
        >
          {(state: transitions.TransitionState) => <MapTimelineFade state={state} />}
        </Transition>
      )}
    </Route>
    <NetworkNotifier />
  </React.Fragment>
);
