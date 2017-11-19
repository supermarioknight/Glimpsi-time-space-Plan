import { LocationSearchSuccess, LocationSearch } from './actions';

type Actions = LocationSearchSuccess | LocationSearch;

export interface Location {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      long: number;
    };
  };
}

const defaultState: Store = {
  loading: false,
  searches: {},
};

export interface Store {
  loading: boolean;
  searches: {
    [key: string]: string;
  };
}

export default (store: Store = defaultState, action: Actions) => {
  switch (action.type) {
    case 'LOCATIONS_SEARCH_SUCCESS':
      return {
        ...store,
        loading: false,
        [action.payload.term]: action.payload.locations,
      };

    case 'LOCATIONS_SEARCH':
      return {
        ...store,
        loading: true,
      };

    default:
      return store;
  }
};
