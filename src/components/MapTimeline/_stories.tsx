import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import { action } from '@storybook/addon-actions';
import moment from 'moment-timezone';
import exampleCards from '../../state/timeline/exampleCards';
import MapTimeline from './';

const props = {
  start: moment(),
  end: moment().add(10, 'days'),
  filters: [moment().add(1, 'days'), moment().add(9, 'days')],
  adding: null,
  days: [
    {
      date: moment().add(2, 'days'),
      cards: exampleCards,
    },
  ],
};

reduxStoriesOf('MapTimeline', module)
  .add('default', () => (
    <MapTimeline
      {...props}
      newCard={action('newCard()')}
      saveCard={action('saveCard()')}
      cancelNewCard={action('cancelNewCard()')}
      removeCard={action('removeCard()')}
      onFilterChange={action('onFilterChange()')}
      focusDate={action('focusDate()')}
      editCard={action('editCard()')}
      lastSavedCardId={undefined}
    />
  ))
  .add('adding card', () => (
    <MapTimeline
      {...props}
      adding={{}}
      lastSavedCardId={undefined}
      newCard={action('newCard()')}
      cancelNewCard={action('cancelNewCard()')}
      saveCard={action('saveCard()')}
      removeCard={action('removeCard()')}
      focusDate={action('focusDate()')}
      onFilterChange={action('onFilterChange()')}
      editCard={action('editCard()')}
    />
  ));
