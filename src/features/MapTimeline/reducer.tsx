import moment, { Moment } from 'moment-timezone';
import uuid from 'uuid/v1';
import { Actions } from './actions';
import { CardWithId, Card } from '../types';

const extractStartEnd = (cards: Card[]) => {
  return cards.reduce(
    (obj, card) => {
      if (card.start.isBefore(obj.start, 'day')) {
        obj.start = card.start;
      }

      if (card.start.isAfter(obj.end, 'day')) {
        obj.end = card.start;
      }

      return obj;
    },
    {
      start: cards[0].start,
      end: cards[0].start,
    }
  );
};

const defaultState: Store = {
  adding: null,
  updating: null,
  filters: [],
  start: moment(),
  end: moment(),
  cards: [],
  labels: [],
};

export interface Store {
  adding: { start?: Moment } | null;
  cards: CardWithId[];
  start: Moment;
  end: Moment;
  filters: Moment[];
  labels: string[];
  updating: CardWithId | null;
}

export default (store: Store = defaultState, action: Actions) => {
  switch (action.type) {
    case 'NEW_CARD':
      return {
        ...store,
        adding: action.payload,
      };

    case 'CANCEL_NEW_CARD':
      return {
        ...store,
        adding: null,
        updating: null,
      };

    case 'UPDATE_CARD':
      return {
        ...store,
        adding: true,
        updating: {
          ...store.cards.filter(card => card.id === action.payload)[0],
        },
      };

    case 'REMOVE_CARD': {
      const cards = store.cards.filter(card => card.id !== action.payload.id);

      return {
        cards,
        ...store,
        ...extractStartEnd(cards),
      };
    }

    case 'FILTER_LABELS':
      return {
        ...store,
        labels: action.payload,
      };

    case 'FILTER_TIMELINE':
      // TODO: Check if filters have updated. Only return new state if they have!
      return {
        ...store,
        filters: action.payload,
      };

    case 'UPDATE_TIMELINE':
      const newState = {
        ...store,
        ...action.payload,
      };

      return {
        ...newState,
        ...extractStartEnd(newState.cards),
      };

    case 'SAVE_CARD': {
      const { payload: card } = action;
      let cards;

      if (typeof card.id === 'undefined') {
        cards = store.cards.concat([
          {
            ...card,
            id: uuid(),
          },
        ]);
      } else {
        cards = store.cards.map(storeCard => (storeCard.id === card.id ? card : storeCard));
      }

      return {
        ...store,
        cards,
        adding: null,
        updating: null,
        ...extractStartEnd(cards),
      };
    }

    default:
      return store;
  }
};
