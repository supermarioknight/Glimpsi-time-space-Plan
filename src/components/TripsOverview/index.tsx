import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Helmet from 'react-helmet';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { Trip } from '../../state/trips/reducer';
import TripBox from '../TripBox';
import TripBoxGroup from '../TripBox/Group';
import StartTripBox from '../TripBox/Start';
import { CenteredGutter } from '../Gutter';
import { withScreen } from '../../decorators/analytics/view';

interface Props {
  trips: Trip[];
  className?: string;
  // tslint:disable-next-line no-any
  deleteTrip: (id: string) => any;
}

interface TrackedLinkProps extends LinkProps {
  context?: string;
}

const TrackedLink = withAnalyticsEvents<TrackedLinkProps>({
  onClick: (createAnalyticEvent, props) =>
    createAnalyticEvent({ action: `click ${props.context}` }).fire(),
})(Link);

const TripsOverview: React.StatelessComponent<Props> = ({ trips, className, deleteTrip }) => (
  <CenteredGutter className={className}>
    <Helmet>
      <title>My Trips</title>
    </Helmet>

    <TripBoxGroup>
      {trips.map(trip => (
        <TrackedLink context="view trip" to={`/${trip.id}`} key={trip.id}>
          <TripBox {...trip} requestDelete={() => deleteTrip(trip.id)} />
        </TrackedLink>
      ))}

      <TrackedLink context="create new trip" to="/start">
        <StartTripBox />
      </TrackedLink>
    </TripBoxGroup>
  </CenteredGutter>
);

export default withScreen<Props>('TripsOverview')(TripsOverview);
