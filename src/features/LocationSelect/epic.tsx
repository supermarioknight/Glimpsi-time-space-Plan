import { Observable } from 'rxjs';
import { Epic } from 'redux-observable';
import {
  LocationSearch,
  LOCATIONS_SEARCH,
  LocationSearchSuccess,
  locationsSearchSuccess,
} from './actions';
import { Store } from '../types';
import { geocode } from '../../lib/maps';

type Actions = LocationSearch | LocationSearchSuccess;

const epic: Epic<Actions, Store> = action$ =>
  action$
    .ofType(LOCATIONS_SEARCH)
    .debounce(() => Observable.timer(1000))
    .mergeMap((action: LocationSearch) =>
      Observable.fromPromise(geocode(action.payload)).map(response =>
        locationsSearchSuccess(action.payload, response)
      )
    );

export default epic;
