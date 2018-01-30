import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import CardNew from './';
import { saveCard, cancelNewCard } from '../../features/MapTimeline/actions';
import { Store } from '../../features/types';

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
