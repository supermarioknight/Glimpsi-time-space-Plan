import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Store } from '../../features/types';
import { newCard, filterLabels } from '../../features/MapTimeline/actions';
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
})(Header);
