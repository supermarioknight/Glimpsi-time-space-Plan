import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { routerStoriesOf } from '../../lib/storybook';
import TripsOverview from './';

routerStoriesOf('TripsOverview', module)
  .add('no trips', () => <TripsOverview trips={[]} deleteTrip={action('deleteTrip()')} />)
  .add('with trips', () => (
    <TripsOverview
      deleteTrip={action('deleteTrip()')}
      trips={[
        {
          name: 'Japan',
          id: 'japan',
          destination: {
            formattedAddress: 'Japan',
            position: { lat: 35.5493932, lng: 139.7798386 },
          },
        },
      ]}
    />
  ));
