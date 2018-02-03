import * as React from 'react';
import { routerStoriesOf } from '../../lib/storybook';
import TripsOverview from './';

routerStoriesOf('TripsOverview', module)
  .add('no trips', () => <TripsOverview trips={[]} />)
  .add('with trips', () => (
    <TripsOverview
      trips={[
        {
          name: 'Japan',
          key: 'japan',
          destination: {
            formattedAddress: 'Japan',
            position: { lat: 35.5493932, lng: 139.7798386 },
          },
        },
      ]}
    />
  ));
