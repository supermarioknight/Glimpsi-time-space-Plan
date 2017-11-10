// @flow

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import TimelinePage from '../../components/TimelinePage';
import { saveCard, newCard, removeCard, cancelNewCard, updateTimeline } from './actions';

const selector = createSelector(
  (store) => store.timeline.cards,
  (store) => store.timeline.adding,
  (items, adding) => ({ items, adding }),
);

export default connect(selector, {
  saveCard,
  newCard,
  removeCard,
  updateTimeline,
  cancelNewCard,
})(TimelinePage);
