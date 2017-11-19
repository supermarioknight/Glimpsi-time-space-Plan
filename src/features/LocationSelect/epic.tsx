import { Epic } from 'redux-observable';
import { LocationSearch, LocationSearchSuccess } from './actions';
import { Store } from '../types';

type Actions = LocationSearch | LocationSearchSuccess;

const epic: Epic<Actions, Store> = $action => $action.ofType('LOCATIONS_SEARCH');

export default epic;
