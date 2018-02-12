import * as React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from '../../state/trips/reducer';
import TripBox from '../TripBox';
import TripBoxGroup from '../TripBox/Group';
import StartTripBox from '../TripBox/Start';
import Header from '../Header';
import { CenteredGutter } from '../Gutter';
import AppLayout from '../AppLayout';

interface Props {
  trips: Trip[];
  className?: string;
}

const TripsOverview: React.StatelessComponent<Props> = ({ trips, className }) => (
  <AppLayout className={className}>
    <Header appearance="transparent" />

    <CenteredGutter>
      <TripBoxGroup>
        {trips.map(trip => (
          <Link to={`/${trip.key}`} key={trip.key}>
            <TripBox {...trip} />
          </Link>
        ))}

        <Link to="/start">
          <StartTripBox />
        </Link>
      </TripBoxGroup>
    </CenteredGutter>
  </AppLayout>
);

export default TripsOverview;
