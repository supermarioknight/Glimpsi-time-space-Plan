import moment, { Moment } from 'moment';
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
  adding: false,
  filters: [],
  start: moment(),
  end: moment(),
  cards: [],
};

export interface Store {
  adding: boolean;
  cards: CardWithId[];
  start: Moment;
  end: Moment;
  filters: Moment[];
}

export default (store: Store = defaultState, action: Actions) => {
  switch (action.type) {
    case 'NEW_CARD':
      return {
        ...store,
        adding: true,
      };

    case 'CANCEL_NEW_CARD':
      return {
        ...store,
        adding: false,
      };

    case 'REMOVE_CARD':
      return {
        ...store,
        cards: store.cards.filter(card => card.id !== action.payload.id),
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
        cards = store.cards.map(
          storeCard => (storeCard.id === card.id ? card : storeCard)
        );
      }

      return {
        ...store,
        cards,
        adding: false,
        ...extractStartEnd(cards),
      };
    }

    default:
      return store;
  }
};
