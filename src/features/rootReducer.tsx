import { combineReducers } from 'redux';
import locations from './LocationSelect/reducer';
import timeline from './MapTimeline/reducer';

export default combineReducers({
  locations,
  timeline,
});
