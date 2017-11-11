// @flow

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import TimelinePage from '../../components/TimelinePage';
import { saveCard, newCard, removeCard, cancelNewCard, updateTimeline } from './actions';
import { Store } from '../types';

const selector = createSelector(
  (store: Store) => store.timeline.cards,
  (store: Store) => store.timeline.adding,
  (store: Store) => store.timeline.start,
  (store: Store) => store.timeline.end,
  (items, adding, start, end) => ({ items, adding, start, end }),
);

export default connect(selector, {
  saveCard,
  newCard,
  removeCard,
  updateTimeline,
  cancelNewCard,
})(TimelinePage);
