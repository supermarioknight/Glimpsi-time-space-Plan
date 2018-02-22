import React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { findLast, last } from 'lodash-es';
import Transition from 'react-transition-group/Transition';
import { AnalyticsListener } from '@atlaskit/analytics-next';
import NetworkNotifier from '../../components/NetworkNotifier/Connected';
import tripSelector from '../../decorators/tripSelector';
import DefaultLayout from '../Layout/Default';
import MapTimelineLayout from '../Layout/MapTimeline';
import ServiceWorker from '../ServiceWorker';
import { Root, MapTimeline, TripsOverview, TripStart } from './styles';
import * as transitions from '../../assets/styles/transitions';

const MapTimelineWithKey = tripSelector('tripKey')(MapTimeline);

export default () => (
  <AnalyticsListener
    onEvent={({ context, payload }) => {
      const hasContext = findLast(context, data => !!data.view);

      ReactGA.event({
        ...payload,
        action: `${payload.action}`,
        category: `${payload.category}`,
        label: hasContext ? `${hasContext.view}` : undefined,
      });

      if (process.env.NODE_ENV !== 'production') {
        // tslint:disable-next-line no-any no-console
        console.log(last((ReactGA as any).testModeAPI.calls));
      }
    }}
  >
    <AnalyticsListener
      channel="view"
      onEvent={({ context }) => {
        const name = context.reduce(
          (acc, val) => (acc ? `${acc}->${val.view}` : val.view),
          ''
        ) as string;

        if (name.includes('Modal')) {
          ReactGA.modalview(name);
        } else {
          ReactGA.pageview(name);
        }

        if (process.env.NODE_ENV !== 'production') {
          // tslint:disable-next-line no-any no-console
          console.log(last((ReactGA as any).testModeAPI.calls));
        }
      }}
    >
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
