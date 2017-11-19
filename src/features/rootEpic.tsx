import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/map';

import locationEpic from './LocationSelect/epic';

export default combineEpics(locationEpic);
