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
}

const TripsOverview: React.StatelessComponent<Props> = ({ trips, className }) => (
  <CenteredGutter className={className}>
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
);

export default TripsOverview;
