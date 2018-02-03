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

// const emptyTrip = () => ({
//   adding: null,
//   updating: null,
//   filters: [],
//   start: moment(),
//   end: moment(),
//   cards: [],
//   labels: [],
//   lastSavedCardId: undefined,
//   lastRemovedCard: undefined,
// });

const defaultState: State = {
  focusedCardNumber: undefined,
  currentTrip: '',
  trips: {},
};

export interface State {
  currentTrip: string;
  focusedCardNumber: number | undefined;
  trips: {
    [key: string]: {
      adding: { start?: Moment; datePickerFrom?: Moment } | null;
      cards: CardWithId[];
      start: Moment;
      end: Moment;
      filters: Moment[];
      labels: string[];
      updating: CardWithId | null;
      lastSavedCardId: string | undefined;
      lastRemovedCard: Card | undefined;
    };
  };
}

export default (state: State = defaultState, action: Actions) => {
  switch (action.type) {
    case 'NEW_CARD':
      return {
        ...state,
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            adding: {
              ...action.payload,
              datePickerFrom: action.payload.start ? undefined : state.trips[state.currentTrip].end,
            },
          },
        },
      };

    case 'CANCEL_NEW_CARD':
      return {
        ...state,
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            adding: null,
            updating: null,
          },
        },
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
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            filters: [moment().set('hours', 0), moment().set('hours', 23)],
          },
        },
      };

    case 'RESET_FOCUS_CARD':
      return {
        ...state,
        focusedCardNumber: undefined,
      };

    case 'UPDATE_CARD':
      return {
        ...state,
        trips: {
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            adding: true,
            updating: {
              ...state.trips[state.currentTrip].cards.filter(card => card.id === action.payload)[0],
            },
          },
        },
      };

    case 'REMOVE_CARD': {
      let lastRemovedCard: Card | undefined;
      const cards = state.trips[state.currentTrip].cards.filter(card => {
        const matches = card.id === action.payload.id;
        if (matches) {
          lastRemovedCard = card;
        }
        return !matches;
      });

      return {
        ...state,
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            ...extractStartEnd(cards),
            lastRemovedCard,
            cards,
          },
        },
      };
    }

    case 'FILTER_LABELS':
      return {
        ...state,
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            labels: action.payload,
          },
        },
      };

    case 'FILTER_TIMELINE':
      // TODO: Check if filters have updated. Only return new state if they have!
      return {
        ...state,
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            filters: action.payload,
          },
        },
      };

    case 'UPDATE_TIMELINE':
      const newState = {
        ...state,
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            ...action.payload,
          },
        },
      };

      return {
        ...newState,
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            ...extractStartEnd(newState.trips[state.currentTrip].cards),
          },
        },
      };

    case 'UNDO_DELETE': {
      if (state.trips[state.currentTrip].lastRemovedCard) {
        return {
          ...state,
          trips: {
            ...state.trips,
            [state.currentTrip]: {
              ...state.trips[state.currentTrip],
              lastRemovedCard: undefined,
              cards: [state.trips[state.currentTrip].lastRemovedCard].concat(
                state.trips[state.currentTrip].cards
              ),
            },
          },
        };
      }

      return state;
    }

    case 'SAVE_CARD': {
      const { payload: card } = action;
      let cards;

      if (typeof card.id === 'undefined') {
        cards = state.trips[state.currentTrip].cards.concat([
          {
            ...card,
            id: uuid(),
          },
        ]);
      } else {
        cards = state.trips[state.currentTrip].cards.map(
          storeCard => (storeCard.id === card.id ? card : storeCard)
        );
      }

      return {
        ...state,
        trips: {
          ...state.trips,
          [state.currentTrip]: {
            ...state.trips[state.currentTrip],
            ...extractStartEnd(cards),
            cards,
            adding: null,
            updating: null,
            lastSavedCardId: card.id,
          },
        },
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
