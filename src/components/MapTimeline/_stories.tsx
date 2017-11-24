import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import exampleCards from '../../features/MapTimeline/exampleCards';
import MapTimeline from './';

const props = {
  start: moment(),
  end: moment().add(10, 'days'),
  filters: [moment().add(1, 'days'), moment().add(10, 'days')],
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
      onFilterChange={action('onFilterChange()')}
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
      onFilterChange={action('onFilterChange()')}
    />
  ));
