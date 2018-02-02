import { Middleware } from 'redux';
import * as json from '../lib/json';

export const LS_KEY = 'REDUX_STORE';

export const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);
  // tslint:disable-next-line no-any
  const state = store.getState() as any;

  const stateroonie = {
    ...state,
    timeline: {
      ...state.timeline,
    },
  };

  // Stupid implementation to stop things being persisted.
  // We need a better method.
  delete stateroonie.timeline.lastSavedCardId;
  delete stateroonie.timeline.lastRemovedCard;
  delete stateroonie.timeline.focusedCardNumber;

  localStorage.setItem(LS_KEY, json.stringify(stateroonie));
  return result;
};

export interface InitAction {
  type: '@@INIT';
}
