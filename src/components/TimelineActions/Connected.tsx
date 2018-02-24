import { connect } from 'react-redux';
import { isWithin } from '../../lib/date';
import { createSelector } from 'reselect';
import moment from 'moment';
import { Store } from '../../state/rootReducer';
import { newCard, filterLabels, focusToday } from '../../state/timeline/actions';
import TimelineActions from './';
import { currentTimelineTrip } from '../../state/timeline/selectors';

const selector = createSelector(
  (store: Store) => (currentTimelineTrip(store) || {}).labels,
  (store: Store) => (currentTimelineTrip(store) || {}).start,
  (store: Store) => (currentTimelineTrip(store) || {}).end,
  (labels, start, end) => ({
    labels,
    showFocusToday: isWithin(moment(), [start, end]),
  })
);

export default connect(selector, {
  newCard,
  focusToday,
  onLabelFilter: filterLabels,
})(TimelineActions);
