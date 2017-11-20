import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import locationEpic from './LocationSelect/epic';

export default combineEpics(locationEpic);
