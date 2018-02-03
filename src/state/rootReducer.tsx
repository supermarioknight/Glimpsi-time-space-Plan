import { combineReducers } from 'redux';
import timeline, { State as Timeline } from './timeline/reducer';
import trips, { State as Trips } from './trips/reducer';

export interface Store {
  timeline: Timeline;
  trips: Trips;
}

export default combineReducers<Store>({
  timeline,
  trips,
});
