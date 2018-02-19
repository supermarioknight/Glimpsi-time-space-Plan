import { Store } from '../rootReducer';

export const currentTrip = (store: Store) => store.trips.trips[store.timeline.currentTrip];
