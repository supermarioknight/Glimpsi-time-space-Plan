import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';

import resetFocusEpic from './timeline/epics/resetFocus';
import localStorageEpic from './epics/localStorage';

export default combineEpics(resetFocusEpic, localStorageEpic);
