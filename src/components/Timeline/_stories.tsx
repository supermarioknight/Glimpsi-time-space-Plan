import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Timeline from './';

storiesOf('Timeline', module).add('default', () => (
  <Timeline
    saveCard={action('saveCard()')}
    removeCard={action('deleteCard()')}
    items={[
      {
        id: 1,
        start: '2017-11-05T00:00:00',
        title: 'Snow Fight',
        location: 'Haneda, Japan',
        duration: 60,
        position: {
          lat: -33.9399228,
          lng: 151.1752764,
        },
      },
      {
        id: 2,
        start: '2017-11-04T00:30:00',
        title: 'Valentines Day',
        location: 'Sapporo, Hokkaido, Japan',
        duration: 60,
        position: {
          lat: -33.9399228,
          lng: 151.1752764,
        },
      },
      {
        id: 3,
        start: '2017-10-15T10:00:00',
        title: 'Onsen Bath',
        location: 'Tokyo, Japan',
        duration: 31,
        position: {
          lat: -33.9399228,
          lng: 151.1752764,
        },
      },
      {
        id: 4,
        start: '2017-10-15T10:30:00',
        title: 'Skiing',
        location: 'Kyoto, Japan',
        duration: 30,
        position: {
          lat: -33.9399228,
          lng: 151.1752764,
        },
      },
    ]}
  />
));
