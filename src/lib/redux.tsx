import { Middleware } from 'redux';
import * as json from '../lib/json';

export const LS_KEY = 'REDUX_STORE';

export const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);
  // tslint:disable-next-line no-any
  const state = store.getState() as any;
  // ghetto hack to remove this lmao
  delete state.timeline.lastSavedCardId;
  delete state.timeline.lastRemovedCard;
  localStorage.setItem(LS_KEY, json.stringify(state));
  return result;
};
