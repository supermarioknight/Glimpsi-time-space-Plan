import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Store } from '../../state/rootReducer';
import { newCard, filterLabels, focusToday } from '../../state/timeline/actions';
import TimelineActions from './';
import { currentTrip } from '../../state/timeline/selectors';

const selector = createSelector(
  (store: Store) => currentTrip(store).labels,
  labels => ({
    labels,
  })
);

export default connect(selector, {
  newCard,
  focusToday,
  onLabelFilter: filterLabels,
})(TimelineActions);
