import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Store } from '../../state/rootReducer';
import { newCard, filterLabels, focusToday } from '../../state/timeline/actions';
import Header from './';

const selector = createSelector(
  (store: Store) => store.timeline.labels,
  labels => ({
    labels,
  })
);

export default connect(selector, {
  newCard,
  filterLabels,
  focusToday,
})(Header);
