import { Store } from '../rootReducer';

export const currentTimelineTrip = (store: Store) =>
  store.timeline.trips[store.timeline.currentTrip];
