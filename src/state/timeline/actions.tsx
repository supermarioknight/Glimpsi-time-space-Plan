import { Moment } from 'moment-timezone';
import { InitAction } from '../../lib/redux';
import { Card } from './reducer';

const SAVE_CARD = 'SAVE_CARD';
const NEW_CARD = 'NEW_CARD';
const UPDATE_CARD = 'UPDATE_CARD';
const REMOVE_CARD = 'REMOVE_CARD';
const UPDATE_TIMELINE = 'UPDATE_TIMELINE';
const CANCEL_NEW_CARD = 'CANCEL_NEW_CARD';
const FILTER_TIMELINE = 'FILTER_TIMELINE';
const FILTER_LABELS = 'FILTER_LABELS';
const CANCEL_UPDATE_CARD = 'CANCEL_UPDATE_CARD';
const UNDO_DELETE = 'UNDO_DELETE';
const FOCUS_CARD = 'FOCUS_CARD';
const RESET_FOCUS_CARD = 'RESET_FOCUS_CARD';
const FOCUS_TODAY = 'FOCUS_TODAY';

export type Actions =
  | NewCard
  | CancelNewCard
  | RemoveCard
  | UpdateTimeline
  | SaveCard
  | FilterTimeline
  | FilterLabels
  | UpdateCard
  | CancelUpdateCard
  | UndoDelete
  | FocusCard
  | ResetFocusCard
  | FocusToday
  | InitAction;

export interface ResetFocusCard {
  type: typeof RESET_FOCUS_CARD;
}

export const resetFocusCard = (): ResetFocusCard => ({
  type: RESET_FOCUS_CARD,
});

export interface FocusCard {
  type: typeof FOCUS_CARD;
  payload: number | undefined;
}

export const focusCard = (cardNumber?: number): FocusCard => ({
  type: FOCUS_CARD,
  payload: cardNumber,
});

export interface UndoDelete {
  type: typeof UNDO_DELETE;
}

export const undoDelete = (): UndoDelete => ({
  type: UNDO_DELETE,
});

interface FocusToday {
  type: typeof FOCUS_TODAY;
}

export const focusToday = (): FocusToday => ({
  type: FOCUS_TODAY,
});

export interface FilterTimeline {
  type: typeof FILTER_TIMELINE;
  payload: Moment[];
}

export const filterTimeline = (filters: Moment[]): FilterTimeline => ({
  type: FILTER_TIMELINE,
  payload: filters,
});

export interface FilterLabels {
  type: typeof FILTER_LABELS;
  payload: string[];
}

export const filterLabels = (labels: string[]): FilterLabels => ({
  type: FILTER_LABELS,
  payload: labels,
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
  payload: { start?: Moment };
}

export const newCard = (options: { start?: Moment } = {}): NewCard => ({
  type: 'NEW_CARD',
  payload: options,
});

export interface UpdateCard {
  type: typeof UPDATE_CARD;
  payload: string;
}

export const updateCard = (id: string): UpdateCard => ({
  type: 'UPDATE_CARD',
  payload: id,
});

export interface CancelUpdateCard {
  type: typeof CANCEL_UPDATE_CARD;
}

export const cancelUpdateCard = (): CancelUpdateCard => ({
  type: 'CANCEL_UPDATE_CARD',
});

export interface RemoveCard {
  type: typeof REMOVE_CARD;
  payload: {
    id: string;
  };
}

export const removeCard = (id: string): RemoveCard => ({
  type: 'REMOVE_CARD',
  payload: {
    id,
  },
});

export interface UpdateTimeline {
  type: typeof UPDATE_TIMELINE;
  payload: { [key: string]: string };
}

export const updateTimeline = (data: { [key: string]: string }): UpdateTimeline => ({
  type: 'UPDATE_TIMELINE',
  payload: data,
});

export interface CancelNewCard {
  type: typeof CANCEL_NEW_CARD;
}

export const cancelNewCard = (): CancelNewCard => ({
  type: 'CANCEL_NEW_CARD',
});
