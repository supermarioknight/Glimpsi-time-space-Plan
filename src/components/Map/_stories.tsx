import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Map from './';
import exampleCards from '../../features/MapTimeline/exampleCards';

const markers = exampleCards.map(example => ({
  position: example.location.position,
}));

storiesOf('Map', module)
  .add('default', () => <Map />)
  .add('markers', () => <Map markers={markers} />);
