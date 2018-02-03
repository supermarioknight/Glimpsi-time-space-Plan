import { Trip } from './reducer';

export type Actions = SaveTrip | DeleteTrip;

const SAVE_TRIP = 'SAVE_TRIP';
const DELETE_TRIP = 'DELETE_TRIP';

interface SaveTrip {
  type: typeof SAVE_TRIP;
  payload: Trip;
}

interface DeleteTrip {
  type: typeof DELETE_TRIP;
  payload: string;
}

export const saveTrip = (trip: Trip): SaveTrip => ({
  type: SAVE_TRIP,
  payload: trip,
});

export const deleteTrip = (id: string): DeleteTrip => ({
  type: DELETE_TRIP,
  payload: id,
});
