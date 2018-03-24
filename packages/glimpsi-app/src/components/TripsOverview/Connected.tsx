import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Store } from '../../state/rootReducer';
import { deleteTrip } from '../../state/trips/actions';
import TripsOverview from './';

const selector = createSelector(
  (state: Store) => state.trips.trips,
  trips => ({
    trips: Object.entries(trips).map(([key, value]) => ({
      ...value,
      id: key,
    })),
  })
);

export default connect(selector, { deleteTrip })(TripsOverview);
