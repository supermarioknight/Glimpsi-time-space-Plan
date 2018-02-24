import moment, { Moment } from 'moment-timezone';
import uuid from 'uuid/v1';
import { stripTz } from '../../lib/date';
import { Actions } from './actions';
import { Actions as TripsActions } from '../trips/actions';

export interface Location {
  formattedAddress: string;
  position: {
    lat: number;
    lng: number;
  };
}

export interface Card {
  id?: string;
  duration: number;
  title: string;
  start: Moment;
  notes: string;
  labels: string[];
  location: Location;
}

export interface CardWithId extends Card {
  id: string;
}

const extractStartEnd = (cards: Card[]) => {
  const startEnd = cards.reduce(
    (obj, card) => {
      const cardStart = card.start;
      const currentStart = obj.start;
      const currentEnd = obj.end;

      if (cardStart.isBefore(currentStart, 'day')) {
        obj.start = cardStart;
      }

      if (cardStart.isAfter(currentEnd, 'day')) {
        obj.end = cardStart;
      }

      return obj;
    },
    {
      start: cards[0] ? cards[0].start : moment(),
      end: cards[0] ? cards[0].start : moment(),
    }
  );

  return {
    start: stripTz(startEnd.start),
    end: stripTz(startEnd.end),
  };
};

export const emptyTrip = () => ({
  adding: null,
  updating: null,
  filters: [],
  start: moment(),
  end: moment(),
  cards: [],
  labels: [],
  lastSavedCardId: undefined,
  lastRemovedCard: undefined,
});

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
      filters: [Moment, Moment];
      labels: string[];
      updating: CardWithId | null;
      lastSavedCardId: string | undefined;
      lastRemovedCard: Card | undefined;
    };
  };
}

type CombinedActions = Actions | TripsActions;

const buildFiltersFromDate = (date: Moment) => [
  moment(date).set('hours', 0),
  moment(date).set('hours', 23),
];

export default (state: State = defaultState, action: CombinedActions) => {
  switch (action.type) {
    case 'SAVE_TRIP':
      if (state.trips[action.payload.id]) {
        return state;
      }

      return {
        ...state,
        trips: {
          ...state.trips,
          [action.payload.id]: emptyTrip(),
        },
      };

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

    case 'SELECT_TRIP':
      return {
        ...state,
        currentTrip: action.payload,
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
            filters: buildFiltersFromDate(moment()),
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
          ...state.trips,
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
            // Set filter focus to this card if there were no filters set previously.
            filters: state.trips[state.currentTrip].filters.length
              ? state.trips[state.currentTrip].filters
              : buildFiltersFromDate(card.start),
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
