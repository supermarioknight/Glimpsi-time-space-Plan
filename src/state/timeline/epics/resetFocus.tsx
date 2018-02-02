import { Epic } from 'redux-observable';
import { Actions, resetFocusCard } from '../actions';
import { Store } from '../../rootReducer';

const resetFocusEpic: Epic<Actions, Store> = action$ =>
  action$
    .ofType('FOCUS_CARD', 'FOCUS_TODAY')
    .delay(50)
    .mapTo(resetFocusCard());

export default resetFocusEpic;
