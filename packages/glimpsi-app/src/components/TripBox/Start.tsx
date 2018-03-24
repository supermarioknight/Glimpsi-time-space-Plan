import * as React from 'react';
import { Root, Title } from './styles';

const TripBox: React.StatelessComponent<{}> = () => (
  <Root>
    <Title aria-label="Start a trip">+</Title>
  </Root>
);

export default TripBox;
