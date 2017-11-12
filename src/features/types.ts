import { Store as Timeline } from './Timeline/timeline.reducer';

export interface Action {
  type: string,
  payload?: any,
};

export interface Store {
  timeline: Timeline,
};

export interface Card {
  id?: number,
  end?: string,
  title: string,
  location: string,
  start: string,
  image: string,
};

export interface CardWithId extends Card {
  id: number,
}
