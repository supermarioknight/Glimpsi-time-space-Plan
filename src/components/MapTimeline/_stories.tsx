import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import { action } from '@storybook/addon-actions';
import moment from 'moment-timezone';
import exampleCards from '../../state/timeline/exampleCards';
import MapTimeline, { Props } from './';

const props: Props = {
  tripName: 'Cool Trip',
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
  newCard: action('newCard()'),
  saveCard: action('saveCard()'),
  cancelNewCard: action('cancelNewCard()'),
  removeCard: action('removeCard()'),
  onFilterChange: action('onFilterChange()'),
  focusDate: action('focusDate()'),
  undoDelete: action('undoDelete()'),
  lastRemovedCard: undefined,
  editCard: action('editCard()'),
  resetFocusCard: action('resetFocusCard()'),
  focusCard: action('focusCard()'),
  lastSavedCardId: undefined,
};

reduxStoriesOf('MapTimeline', module)
  .add('default', () => <MapTimeline {...props} />)
  .add('adding card', () => <MapTimeline {...props} adding={{}} />);
