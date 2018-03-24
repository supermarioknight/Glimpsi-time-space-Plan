import { connect } from 'react-redux';
import Timeline from './';
import { createSelector } from 'reselect';
import { Store } from '../../state/rootReducer';
import { undoDelete } from '../../state/timeline/actions';

const selector = createSelector(
  (state: Store) => state.timeline.focusedCardNumber,
  focusedCard => ({
    focusedCard,
  })
);

export default connect(selector, {
  undoDelete,
})(Timeline);
