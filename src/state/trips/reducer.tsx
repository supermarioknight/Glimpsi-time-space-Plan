import { Location } from '../timeline/reducer';
import { Actions } from './actions';

export interface Trip {
  id: string;
  name: string;
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
          [action.payload.id]: {
            ...state.trips[action.payload.id],
            ...action.payload,
          },
        },
      };

    case 'DELETE_TRIP':
      const newState = {
        ...state,
        trips: {
          ...state.trips,
          [action.payload]: undefined,
        },
      };

      delete newState.trips[action.payload];

      return newState;

    default:
      return state;
  }
}
