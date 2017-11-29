import { Middleware } from 'redux';

export const LS_KEY = 'REDUX_STORE';

export const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem(LS_KEY, JSON.stringify(state));
  return result;
};
