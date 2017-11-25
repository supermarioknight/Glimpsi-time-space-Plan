import { Action } from 'redux';
import { Moment } from 'moment';
import { Store as Timeline } from './MapTimeline/reducer';

export interface Store {
  timeline: Timeline;
}

export interface Card {
  id?: number;
  duration: number;
  title: string;
  start: Moment;
  time: Moment;
  location: {
    formattedAddress: string;
    position: {
      lat: number;
      lng: number;
    };
  };
}

export interface CardWithId extends Card {
  id: number;
}

export type Reducer = (store: {}, action: FluxStandardAction) => {};

export interface FluxStandardAction extends Action {
  // tslint:disable-next-line no-any
  payload: any;
}
