import * as React from 'react';
import { Trip } from '../../state/trips/reducer';
import { Root } from './styles';

interface Props {
  trips: Trip[];
}

const TripsOverview: React.StatelessComponent<Props> = ({ trips }) => (
  <Root>{trips.length === 0 ? 'no trips!' : 'some trips'}</Root>
);

export default TripsOverview;
