import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import CardNew from './';
import { saveCard, cancelNewCard } from '../../state/timeline/actions';
import { Store } from '../../state/rootReducer';

const selector = createSelector(
  (store: Store) => store.timeline.updating,
  (store: Store) => store.timeline.adding,
  (updatingCard, adding) => ({
    ...adding,
    ...updatingCard,
  })
);

export default connect(selector, {
  onSave: saveCard,
  onCancel: cancelNewCard,
})(CardNew);
