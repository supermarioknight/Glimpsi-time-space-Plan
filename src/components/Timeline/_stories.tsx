import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import cards from '../../features/MapTimeline/exampleCards';
import Timeline from './';

const groups = [
  {
    date: moment(),
    cards: [
      {
        id: '1',
        start: moment(),
        duration: 400,
        title: 'Fly to Japan',
        time: moment('1970-01-01 00:30:00Z'),
        location: {
          formattedAddress: 'Sydney Airport (SYD)',
          position: { lat: -33.9399228, lng: 151.1752764 },
        },
      },
      {
        id: '2',
        start: moment(),
        duration: 400,
        title: 'Another  to Japan',
        time: moment('1970-01-01 00:30:00Z'),
        location: {
          formattedAddress: 'Sydney Airport (SYD)',
          position: { lat: -33.9399228, lng: 151.1752764 },
        },
      },
    ],
  },
  {
    date: moment().add(1, 'day'),
    cards: cards.slice(2, 4),
  },
];

storiesOf('Timeline', module).add('default', () => (
  <Timeline
    newCard={action('newCard()')}
    saveCard={action('saveCard()')}
    onFilterChange={action('onFilterChange()')}
    removeCard={action('deleteCard()')}
    days={groups}
    filters={[moment(), moment().add(1, 'day')]}
  />
));
