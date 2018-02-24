import React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import Transition from 'react-transition-group/Transition';
import { AnalyticsListener } from '@atlaskit/analytics-next';
import NetworkNotifier from '../../components/NetworkNotifier/Connected';
import tripSelector from '../../decorators/tripSelector';
import DefaultLayout from '../Layout/Default';
import MapTimelineLayout from '../Layout/MapTimeline';
import ServiceWorker from '../ServiceWorker';
import { Root, MapTimeline, TripsOverview, TripStart } from './styles';
import * as transitions from '../../assets/styles/transitions';
import { trackEvent, trackView } from '../../lib/analytics';

const MapTimelineWithKey = tripSelector('tripKey')(MapTimeline);

export default () => (
  <AnalyticsListener onEvent={trackEvent}>
    <AnalyticsListener channel="view" onEvent={trackView}>
      <Root>
        <NetworkNotifier />
        <ServiceWorker />

        <Helmet titleTemplate="%s | glimpsi" />

        <Route path="/" exact>
          {({ match }) => (
            <Transition in={!!match} timeout={100} mountOnEnter unmountOnExit>
              {(state: transitions.TransitionState) => (
                <DefaultLayout>
                  <TripsOverview state={state} />
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
                  <TripStart state={state} />
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
                  <MapTimelineWithKey state={state} location={location} />
                </MapTimelineLayout>
              )}
            </Transition>
          )}
        </Route>
      </Root>
    </AnalyticsListener>
  </AnalyticsListener>
);
