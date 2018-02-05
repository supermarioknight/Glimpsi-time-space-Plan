import * as React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from '../../state/trips/reducer';
import TripBox from '../TripBox';
import TripBoxGroup from '../TripBox/Group';
import StartTripBox from '../TripBox/Start';
import BasicHeader from '../Header/Basic';
import { Root } from './styles';

interface Props {
  trips: Trip[];
}

const TripsOverview: React.StatelessComponent<Props> = ({ trips }) => (
  <React.Fragment>
    <BasicHeader />

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
  </React.Fragment>
);

export default TripsOverview;
