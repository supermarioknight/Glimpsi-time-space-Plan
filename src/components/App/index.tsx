import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import MapTimeline from '../MapTimeline/Connected/Async';
import TripsOverview from '../TripsOverview/Async';
import NetworkNotifier from '../../components/NetworkNotifier/Connected';
import TripStart from '../TripStart/Async';
import tripSelector from '../../decorators/tripSelector';
import DefaultLayout from '../Layout/Default';
import MapTimelineLayout from '../Layout/MapTimeline';
import { Root } from './styles';
import * as transitions from '../../assets/styles/transitions';

const MapTimelineWithKey = tripSelector('tripKey')(MapTimeline);

const TripsOverviewFade = styled(TripsOverview)`
  ${transitions.fade(100)};
`;

const TripStartFade = styled(TripStart)`
  ${transitions.fade(100)};
`;

const MapTimelineFade = styled(MapTimelineWithKey)`
  ${transitions.fade(100)};
`;

export default () => (
  <Root>
    <Route path="/" exact>
      {({ match }) => (
        <Transition in={!!match} timeout={100} mountOnEnter unmountOnExit>
          {(state: transitions.TransitionState) => (
            <DefaultLayout>
              <TripsOverviewFade state={state} />
            </DefaultLayout>
          )}
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
        >
          {(state: transitions.TransitionState) => (
            <DefaultLayout>
              <TripStartFade state={state} />
            </DefaultLayout>
          )}
        </Transition>
      )}
    </Route>

    <Route path="/:tripKey">
      {({ match, location }) => (
        <Transition
          in={!!match && match.path.startsWith('/:tripKey') && !match.url.startsWith('/start')}
          timeout={100}
          mountOnEnter
          unmountOnExit
        >
          {(state: transitions.TransitionState) => (
            <MapTimelineLayout>
              <MapTimelineFade state={state} location={location} />
            </MapTimelineLayout>
          )}
        </Transition>
      )}
    </Route>

    <NetworkNotifier />
  </Root>
);
