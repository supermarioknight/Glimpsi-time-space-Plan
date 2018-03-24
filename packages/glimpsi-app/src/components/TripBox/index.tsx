import * as React from 'react';
import { Trip as TripProps } from '../../state/trips/reducer';
import Map from '../Map';
import { Root, Title, Button } from './styles';

interface Props extends TripProps {
  requestDelete: () => void;
}

const TripBox: React.StatelessComponent<Props> = ({ destination, name, requestDelete }) => (
  <Root>
    <Title>{name}</Title>
    <Map markers={[destination]} />
    <Button onClick={requestDelete}>Delete</Button>
  </Root>
);

export default TripBox;
