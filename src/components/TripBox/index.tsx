import * as React from 'react';
import { Trip as Props } from '../../state/trips/reducer';
import Map from '../Map';
import { Root, Title } from './styles';

const TripBox: React.StatelessComponent<Props> = ({ destination, name }) => (
  <Root>
    <Title>{name}</Title>
    <Map markers={[destination]} />
  </Root>
);

export default TripBox;
