import * as React from 'react';
import { Trip } from '../../state/trips/reducer';
import TripBox from '../TripBox';
import TripBoxGroup from '../TripBox/Group';
import StartTripBox from '../TripBox/Start';
import { Link } from 'react-router-dom';
import { Root } from './styles';

interface Props {
  trips: Trip[];
}

const TripsOverview: React.StatelessComponent<Props> = ({ trips }) => (
  <Root>
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
  </Root>
);

export default TripsOverview;
