import { Moment } from 'moment';
import { Card } from '../types';

const SAVE_CARD = 'SAVE_CARD';
const NEW_CARD = 'NEW_CARD';
const REMOVE_CARD = 'REMOVE_CARD';
const UPDATE_TIMELINE = 'UPDATE_TIMELINE';
const CANCEL_NEW_CARD = 'CANCEL_NEW_CARD';
const FILTER_TIMELINE = 'FILTER_TIMELINE';

export type Actions =
  | NewCard
  | CancelNewCard
  | RemoveCard
  | UpdateTimeline
  | SaveCard
  | FilterTimeline;

export interface FilterTimeline {
  type: typeof FILTER_TIMELINE;
  payload: Moment[];
}

export const filterTimeline = (filters: Moment[]): FilterTimeline => ({
  type: FILTER_TIMELINE,
  payload: filters,
});

export interface SaveCard {
  type: typeof SAVE_CARD;
  payload: Card;
}

export const saveCard = (card: Card): SaveCard => ({
  type: SAVE_CARD,
  payload: card,
});

export interface NewCard {
  type: typeof NEW_CARD;
}

export const newCard = (): NewCard => ({
  type: 'NEW_CARD',
});

export interface RemoveCard {
  type: typeof REMOVE_CARD;
  payload: {
    id: number;
  };
}

export const removeCard = (id: number): RemoveCard => ({
  type: 'REMOVE_CARD',
  payload: {
    id,
  },
});

export interface UpdateTimeline {
  type: typeof UPDATE_TIMELINE;
  payload: { [key: string]: string };
}

export const updateTimeline = (data: {
  [key: string]: string;
}): UpdateTimeline => ({
  type: 'UPDATE_TIMELINE',
  payload: data,
});

export interface CancelNewCard {
  type: typeof CANCEL_NEW_CARD;
}

export const cancelNewCard = (): CancelNewCard => ({
  type: 'CANCEL_NEW_CARD',
});
