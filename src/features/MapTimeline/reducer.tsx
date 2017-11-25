import { Moment } from 'moment';
import { Actions } from './actions';
import { CardWithId, Card } from '../types';
import exampleCards from './exampleCards';

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
  cards: exampleCards,
  ...extractStartEnd(exampleCards),
  filters: [
    extractStartEnd(exampleCards).start,
    extractStartEnd(exampleCards).end,
  ],
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
        const lastCard = store.cards[store.cards.length - 1];
        const id = lastCard ? lastCard.id + 1 : 1;
        const newCard = {
          ...card,
          id,
        };

        cards = store.cards.concat([newCard]);
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
