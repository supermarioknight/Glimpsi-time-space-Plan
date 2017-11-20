import {
  LocationSearchSuccess,
  LocationSearch,
  LOCATIONS_SEARCH_SUCCESS,
  LOCATIONS_SEARCH,
} from './actions';

import { Location } from '../../lib/maps';

type Actions = LocationSearchSuccess | LocationSearch;

const defaultState: Store = {
  loading: false,
  terms: {},
};

interface Value {
  value: string;
  label: string;
}

interface LocationAndOptions {
  locations: Location[];
  options: Value[];
}

export interface Store {
  loading: boolean;
  terms: {
    [key: string]: LocationAndOptions;
  };
}

export default (store: Store = defaultState, action: Actions) => {
  switch (action.type) {
    case LOCATIONS_SEARCH_SUCCESS:
      return {
        ...store,
        loading: false,
        terms: {
          ...store.terms,
          [action.payload.term]: {
            locations: action.payload.locations,
            options: action.payload.locations.map(location => ({
              value: JSON.stringify(location.geometry.location),
              label: location.formatted_address,
            })),
          },
        },
      };

    case LOCATIONS_SEARCH:
      return {
        ...store,
        loading: true,
      };

    default:
      return store;
  }
};
