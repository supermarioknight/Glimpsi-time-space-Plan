import * as React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from '../../state/trips/reducer';
import TripBox from '../TripBox';
import TripBoxGroup from '../TripBox/Group';
import StartTripBox from '../TripBox/Start';
import { CenteredGutter } from '../Gutter';

interface Props {
  trips: Trip[];
  className?: string;
  // tslint:disable-next-line no-any
  deleteTrip: (id: string) => any;
}

const TripsOverview: React.StatelessComponent<Props> = ({ trips, className, deleteTrip }) => (
  <CenteredGutter className={className}>
    <TripBoxGroup>
      {trips.map(trip => (
        <Link to={`/${trip.id}`} key={trip.id}>
          <TripBox {...trip} requestDelete={() => deleteTrip(trip.id)} />
        </Link>
      ))}

      <Link to="/start">
        <StartTripBox />
      </Link>
    </TripBoxGroup>
  </CenteredGutter>
);

export default TripsOverview;
