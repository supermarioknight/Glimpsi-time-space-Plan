import { Action } from 'redux';
import { Moment } from 'moment';
import { Store as Timeline } from './MapTimeline/reducer';

export interface Store {
  timeline: Timeline;
}

export interface Card {
  id?: string;
  duration: number;
  title: string;
  start: Moment;
  time: Moment;
  labels: string[];
  location: {
    formattedAddress: string;
    position: {
      lat: number;
      lng: number;
    };
  };
}

export interface CardWithId extends Card {
  id: string;
}

export type Reducer = (store: {}, action: FluxStandardAction) => {};

export interface FluxStandardAction extends Action {
  // tslint:disable-next-line no-any
  payload: any;
}
