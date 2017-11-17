import { combineReducers } from 'redux';
import { Reducer, FluxStandardAction } from './types';

const reducerModules = require.context('./', true, /.\.reducer\.tsx$/);

/**
 * Imports all [name].reducer.js found under src/features.
 *
 * Each [name]ed reducer requires at least one default state.
 *
 * Each reducer should export a default 'reduce' function,
 * and an optional 'defaultState' named export.
 */

const definitions = reducerModules.keys().reduce((acc, key) => {
  const module = reducerModules(key);

  const splitKey = key.split('/');
  const cleanedKey = splitKey[splitKey.length - 1].split('.')[0];

  /* eslint no-param-reassign:0 */
  if (!acc[cleanedKey]) {
    acc[cleanedKey] = {
      defaultState: undefined,
      reducers: [],
    };
  }

  acc[cleanedKey].reducers.push(module.default);

  acc[cleanedKey].defaultState = {
    ...acc[cleanedKey].defaultState,
    ...module.defaultState,
  };

  return acc;
}, {});

const reducers = Object.keys(definitions).reduce((acc, key) => {
  const definition = definitions[key];

  if (process.env.NODE_ENV !== 'production' && !definition.defaultState) {
    // tslint:disable-next-line no-console
    console.error(`DefaultState for ${key} has not been defined.`);
  }

  acc[key] = (state = definition.defaultState, action: FluxStandardAction) => {
    let result: {} | undefined;

    definition.reducers.forEach((reducer: Reducer) => {
      if (result) {
        return;
      }

      result = reducer(state, action);
    });

    return result || state;
  };

  return acc;
}, {});

export default combineReducers(reducers);
