import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import NewCardModal from './Modal';
import { saveCard, cancelNewCard } from '../../state/timeline/actions';
import { Store } from '../../state/rootReducer';
import { currentTimelineTrip } from '../../state/timeline/selectors';

const selector = createSelector(
  (store: Store) => currentTimelineTrip(store).updating,
  (store: Store) => currentTimelineTrip(store).adding,
  (updatingCard, adding) => ({
    ...adding,
    ...updatingCard,
    in: !!adding,
  })
);

export default connect(selector, {
  onSave: saveCard,
  onCancel: cancelNewCard,
})(NewCardModal);
