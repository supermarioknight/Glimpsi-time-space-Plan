import { combineReducers } from 'redux';
import timeline, { State as Timeline } from './timeline/reducer';

export interface Store {
  timeline: Timeline;
}

export default combineReducers<Store>({
  timeline,
});
