import { Location } from './reducer';

const LOCATIONS_SEARCH = 'LOCATIONS_SEARCH';
const LOCATIONS_SEARCH_SUCCESS = 'LOCATIONS_SEARCH_SUCCESS';

export interface LocationSearchSuccess {
  type: typeof LOCATIONS_SEARCH_SUCCESS;
  payload: {
    term: string;
    locations: Location[];
  };
}

export interface LocationSearch {
  type: typeof LOCATIONS_SEARCH;
  payload: string;
}

export const locationsSearch = (term: string): LocationSearch => ({
  type: LOCATIONS_SEARCH,
  payload: term,
});

export const locationsSearchSuccess = (
  term: string,
  locations: Location[]
): LocationSearchSuccess => ({
  type: LOCATIONS_SEARCH_SUCCESS,
  payload: {
    term,
    locations,
  },
});
