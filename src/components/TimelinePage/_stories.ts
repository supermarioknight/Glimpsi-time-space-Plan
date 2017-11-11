// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { image } from 'faker';

import TimelinePage from './';

const props = {
  start: '2017-10-04',
  end: '2017-12-04',
  items: [{
    id: 1,
    start: '2017-11-05T00:00:00',
    title: 'Snow Fight',
    location: 'Haneda, Japan',
    image: image.city(),
  }, {
    id: 2,
    start: '2017-11-04T00:30:00',
    title: 'Valentines Day',
    location: 'Sapporo, Hokkaido, Japan',
    image: image.animals(),
  }, {
    id: 3,
    start: '2017-10-15T00:00:00',
    title: 'Onsen Bath',
    location: 'Tokyo, Japan',
    image: image.nature(),
  }, {
    id: 4,
    start: '2017-10-15T10:30:00',
    title: 'Skiing',
    location: 'Kyoto, Japan',
    image: image.fashion(),
  }],
};

storiesOf('TimelinePage', module)
  .add('default', () => (
    <TimelinePage
      {...props}
      newCard={action('newCard()')}
      saveCard={action('saveCard()')}
      deleteCard={action('deleteCard()')}
    />
  ))
  .add('adding card', () => (
    <TimelinePage
      {...props}
      adding
      newCard={action('newCard()')}
      cancelNewCard={action('cancelNewCard()')}
      saveCard={action('saveCard()')}
      deleteCard={action('deleteCard()')}
    />
  ));
