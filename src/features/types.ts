import { Store as Timeline } from './Timeline/timeline.reducer';

export interface Action {
  type: string,
  payload: any,
};

export interface Store {
  timeline: Timeline,
};
