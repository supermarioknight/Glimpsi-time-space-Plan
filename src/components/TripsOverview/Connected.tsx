import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Store } from '../../state/rootReducer';
import TripsOverview from './';

const selector = createSelector(
  (state: Store) => state.trips.trips,
  trips => ({ trips: Object.values(trips) })
);

export default connect(selector, {})(TripsOverview);
