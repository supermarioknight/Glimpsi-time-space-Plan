import { Store } from '../rootReducer';

export const currentTrip = (store: Store) => store.timeline.trips[store.timeline.currentTrip];
