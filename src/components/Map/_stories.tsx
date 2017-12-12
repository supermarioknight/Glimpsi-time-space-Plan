import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Map from './';
import exampleCards from '../../features/MapTimeline/exampleCards';

const markers = exampleCards.map(example => ({
  position: example.location.position,
}));

storiesOf('Map', module)
  .add('default', () => <Map />)
  .add('markers', () => (
    <Map
      autofit
      markers={markers}
      onMarkerOut={action('onMarkerOut()')}
      onMarkerOver={action('onMarkerOver()')}
      onMarkerClick={action('onMarkerClick()')}
    />
  ));
