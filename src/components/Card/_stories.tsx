import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './';

storiesOf('Card/Card', module).add('start date', () => (
  <Card
    title="Valentines Day"
    location={{
      formattedAddress: 'Sapporo, Hokkaido, Japan',
      position: {
        lat: 1,
        lng: 1,
      },
    }}
    start="2017-11-04T01:38:55.430Z"
    duration={30}
  />
));
