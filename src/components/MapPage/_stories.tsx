import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { image } from 'faker';

import MapPage from './';

const props = {
  start: '2017-10-04',
  end: '2017-12-04',
  adding: false,
  items: [
    {
      id: 1,
      start: '2017-11-05T00:00:00',
      duration: 30,
      title: 'Snow Fight',
      location: 'Haneda, Japan',
      image: image.city(),
    },
    {
      id: 2,
      start: '2017-11-04T00:30:00',
      title: 'Valentines Day',
      duration: 30,
      location: 'Sapporo, Hokkaido, Japan',
      image: image.animals(),
    },
    {
      id: 3,
      start: '2017-10-15T00:00:00',
      title: 'Onsen Bath',
      duration: 30,
      location: 'Tokyo, Japan',
      image: image.nature(),
    },
    {
      id: 4,
      start: '2017-10-15T10:30:00',
      title: 'Skiing',
      location: 'Kyoto, Japan',
      duration: 30,
      image: image.fashion(),
    },
  ],
};

storiesOf('MapPage', module)
  .add('default', () => (
    <MapPage
      {...props}
      newCard={action('newCard()')}
      saveCard={action('saveCard()')}
      cancelNewCard={action('cancelNewCard()')}
      removeCard={action('removeCard()')}
      updateTimeline={action('updateTimeline()')}
    />
  ))
  .add('adding card', () => (
    <MapPage
      {...props}
      adding
      newCard={action('newCard()')}
      cancelNewCard={action('cancelNewCard()')}
      saveCard={action('saveCard()')}
      removeCard={action('removeCard()')}
      updateTimeline={action('updateTimeline()')}
    />
  ));
