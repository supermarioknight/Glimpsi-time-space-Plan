import { AnyAction } from 'redux';
import { Store as Timeline } from './Timeline/timeline.reducer';

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

export type Reducer = (store: {}, action: AnyAction) => {};
