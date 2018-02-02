import moment, { Moment } from 'moment-timezone';
import uuid from 'uuid/v1';
import { Actions } from './actions';

export interface Card {
  id?: string;
  duration: number;
  title: string;
  start: Moment;
  notes: string;
  labels: string[];
  location: {
    formattedAddress: string;
    position: {
      lat: number;
      lng: number;
    };
  };
}

export interface CardWithId extends Card {
  id: string;
}

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

const defaultState: State = {
  adding: null,
  updating: null,
  filters: [],
  start: moment(),
  end: moment(),
  cards: [],
  labels: [],
  focusedCardNumber: undefined,
  lastSavedCardId: undefined,
  lastRemovedCard: undefined,
};

export interface State {
  adding: { start?: Moment; datePickerFrom?: Moment } | null;
  cards: CardWithId[];
  start: Moment;
  end: Moment;
  filters: Moment[];
  labels: string[];
  updating: CardWithId | null;
  focusedCardNumber: number | undefined;
  lastSavedCardId: string | undefined;
  lastRemovedCard: Card | undefined;
}

export default (state: State = defaultState, action: Actions) => {
  switch (action.type) {
    case 'NEW_CARD':
      return {
        ...state,
        adding: {
          ...action.payload,
          datePickerFrom: action.payload.start ? undefined : state.end,
        },
      };

    case 'CANCEL_NEW_CARD':
      return {
        ...state,
        adding: null,
        updating: null,
      };

    case 'FOCUS_CARD':
      return {
        ...state,
        focusedCardNumber: action.payload,
      };

    case 'FOCUS_TODAY':
      return {
        ...state,
        focusedCardNumber: 1,
        filters: [moment().set('hours', 0), moment().set('hours', 23)],
      };

    case 'RESET_FOCUS_CARD':
      return {
        ...state,
        focusedCardNumber: undefined,
      };

    case 'UPDATE_CARD':
      return {
        ...state,
        adding: true,
        updating: {
          ...state.cards.filter(card => card.id === action.payload)[0],
        },
      };

    case 'REMOVE_CARD': {
      let lastRemovedCard: Card | undefined;
      const cards = state.cards.filter(card => {
        const matches = card.id === action.payload.id;
        if (matches) {
          lastRemovedCard = card;
        }
        return !matches;
      });

      return {
        ...state,
        ...extractStartEnd(cards),
        lastRemovedCard,
        cards,
      };
    }

    case 'FILTER_LABELS':
      return {
        ...state,
        labels: action.payload,
      };

    case 'FILTER_TIMELINE':
      // TODO: Check if filters have updated. Only return new state if they have!
      return {
        ...state,
        filters: action.payload,
      };

    case 'UPDATE_TIMELINE':
      const newState = {
        ...state,
        ...action.payload,
      };

      return {
        ...newState,
        ...extractStartEnd(newState.cards),
      };

    case 'UNDO_DELETE': {
      if (state.lastRemovedCard) {
        return {
          ...state,
          lastRemovedCard: undefined,
          cards: [state.lastRemovedCard].concat(state.cards),
        };
      }

      return state;
    }

    case 'SAVE_CARD': {
      const { payload: card } = action;
      let cards;

      if (typeof card.id === 'undefined') {
        cards = state.cards.concat([
          {
            ...card,
            id: uuid(),
          },
        ]);
      } else {
        cards = state.cards.map(storeCard => (storeCard.id === card.id ? card : storeCard));
      }

      return {
        ...state,
        cards,
        adding: null,
        updating: null,
        lastSavedCardId: card.id,
        ...extractStartEnd(cards),
      };
    }

    case '@@INIT':
      if (state.focusedCardNumber !== 1) {
        return {
          ...state,
          focusedCardNumber: 1,
        };
      }

      return state;

    default:
      return state;
  }
};
