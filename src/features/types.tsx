import { Action } from 'redux';
import { Store as Timeline } from './MapTimeline/timeline.reducer';

export interface Store {
  timeline: Timeline;
}

export interface Card {
  id?: number;
  duration: number;
  title: string;
  location: string;
  start: string;
  image: string;
}

export interface CardWithId extends Card {
  id: number;
}

export type Reducer = (store: {}, action: FluxStandardAction) => {};

export interface FluxStandardAction extends Action {
  // tslint:disable-next-line no-any
  payload: any;
}
