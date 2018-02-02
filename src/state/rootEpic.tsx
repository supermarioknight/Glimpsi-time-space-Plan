import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';
import resetFocusEpic from './timeline/epics/resetFocus';

export default combineEpics(resetFocusEpic);
