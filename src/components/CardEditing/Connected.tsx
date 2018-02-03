import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import NewCardModal from './Modal';
import { saveCard, cancelNewCard } from '../../state/timeline/actions';
import { Store } from '../../state/rootReducer';
import { currentTrip } from '../../state/timeline/selectors';

const selector = createSelector(
  (store: Store) => currentTrip(store).updating,
  (store: Store) => currentTrip(store).adding,
  (updatingCard, adding) => ({
    ...adding,
    ...updatingCard,
  })
);

export default connect(selector, {
  onSave: saveCard,
  onCancel: cancelNewCard,
})(NewCardModal);
