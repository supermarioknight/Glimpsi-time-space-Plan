import { Location } from '../timeline/reducer';
import { Actions } from './actions';

export interface Trip {
  name: string;
  key: string;
  destination: Location;
}

export interface State {
  trips: {
    [key: string]: Trip;
  };
}

const defaultState: State = {
  trips: {},
};

export default function tripsReducer(state: State = defaultState, action: Actions) {
  switch (action.type) {
    case 'SAVE_TRIP':
      return {
        ...state,
        trips: {
          ...state.trips,
          [action.payload.key]: {
            ...state.trips[action.payload.key],
            ...action.payload,
          },
        },
      };

    case 'DELETE_TRIP':
      return {
        ...state,
        trips: {
          ...state.trips,
          [action.payload]: undefined,
        },
      };

    default:
      return state;
  }
}
