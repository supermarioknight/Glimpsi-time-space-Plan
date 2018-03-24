import { Epic } from 'redux-observable';
import { Store } from '../rootReducer';
import { LS_KEY } from '../../lib/redux';
import * as json from '../../lib/json';

// tslint:disable-next-line
const resetFocusEpic: Epic<any, Store> = (action$, store) =>
  action$
    .delay(50)
    .do(() => {
      const state = store.getState();
      localStorage.setItem(LS_KEY, json.stringify(state));
    })
    .ignoreElements();

export default resetFocusEpic;
