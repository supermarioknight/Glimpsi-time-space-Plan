import { connect } from 'react-redux';
import Timeline from './';
import { createSelector } from 'reselect';
import { Store } from '../../state/rootReducer';

const selector = createSelector(
  (state: Store) => state.timeline.focusedCardNumber,
  focusedCard => ({
    focusedCard,
  })
);

export default connect(selector)(Timeline);
