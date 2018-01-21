import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
import Card from './';

storiesOf('Card/Card', module).add('start date', () => (
  <Card
    labels={['fun', 'gf']}
    title="Valentines Day"
    location={{
      formattedAddress: 'Sapporo, Hokkaido, Japan',
      position: {
        lat: 1,
        lng: 1,
      },
    }}
    notes=""
    time={moment('1970-01-01 00:30:00Z')}
    start={moment()}
    duration={30}
  />
));
