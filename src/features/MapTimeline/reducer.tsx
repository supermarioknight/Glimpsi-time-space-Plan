import { NewCard, CancelNewCard, RemoveCard, UpdateTimeline, SaveCard } from './actions';
import { CardWithId } from '../types';
import exampleCards from './exampleCards';

type Actions = NewCard | CancelNewCard | RemoveCard | UpdateTimeline | SaveCard;

const defaultState: Store = {
  adding: false,
  cards: exampleCards,
  start: '',
  end: '',
};

export interface Store {
  adding: boolean;
  cards: CardWithId[];
  start: string;
  end: string;
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

    case 'UPDATE_TIMELINE':
      return {
        ...store,
        ...action.payload,
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
        cards = store.cards.map(storeCard => (storeCard.id === card.id ? card : storeCard));
      }

      return {
        ...store,
        cards,
        adding: false,
      };
    }

    default:
      return store;
  }
};
