import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import exampleCards from '../../features/MapTimeline/exampleCards';
import MapTimeline from './';

const props = {
  start: '2017-10-04',
  end: '2017-12-04',
  adding: false,
  items: exampleCards,
};

storiesOf('MapTimeline', module)
  .add('default', () => (
    <MapTimeline
      {...props}
      newCard={action('newCard()')}
      saveCard={action('saveCard()')}
      cancelNewCard={action('cancelNewCard()')}
      removeCard={action('removeCard()')}
      updateTimeline={action('updateTimeline()')}
    />
  ))
  .add('adding card', () => (
    <MapTimeline
      {...props}
      adding
      newCard={action('newCard()')}
      cancelNewCard={action('cancelNewCard()')}
      saveCard={action('saveCard()')}
      removeCard={action('removeCard()')}
      updateTimeline={action('updateTimeline()')}
    />
  ));
