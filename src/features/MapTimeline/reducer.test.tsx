import moment from 'moment';
import reducer, { Store } from './reducer';
import { SaveCard, NewCard, CancelNewCard, RemoveCard } from './actions';

export const defaultState: Store = {
  adding: null,
  cards: [],
  start: moment(),
  end: moment().add(1, 'days'),
  filters: [],
};

describe('timeline reducer', () => {
  it('should cancel adding on save', () => {
    const state: Store = {
      ...defaultState,
    };
    const action: SaveCard = {
      type: 'SAVE_CARD',
      payload: {
        title: 'Snow Fight',
        duration: 50,
        time: moment('1970-01-01 00:30:00Z'),
        start: moment(),
        labels: [],
        location: {
          formattedAddress: 'Sapporo, Hokkaido, Japan',
          position: {
            lat: 1,
            lng: 1,
          },
        },
      },
    };

    const newState = reducer(state, action);

    expect(newState.adding).toBeFalsy();
  });

  it('should add a new card', () => {
    const state = {
      ...defaultState,
    };
    const action: SaveCard = {
      type: 'SAVE_CARD',
      payload: {
        title: 'Snow Fight',
        duration: 50,
        time: moment('1970-01-01 00:30:00Z'),
        start: moment(),
        labels: [],
        location: {
          formattedAddress: 'Sapporo, Hokkaido, Japan',
          position: {
            lat: 1,
            lng: 1,
          },
        },
      },
    };

    const newState = reducer(state, action);

    expect(newState.cards).toEqual([
      {
        ...action.payload,
        id: 1,
      },
    ]);
  });

  it('should increment id if previous card exists', () => {
    const state: Store = {
      ...defaultState,
      cards: [
        {
          id: '2',
          title: '',
          duration: 30,
          time: moment('1970-01-01 00:30:00Z'),
          start: moment(),
          labels: [],
          location: {
            formattedAddress: 'Sapporo, Hokkaido, Japan',
            position: {
              lat: 1,
              lng: 1,
            },
          },
        },
      ],
    };
    const action: SaveCard = {
      type: 'SAVE_CARD',
      payload: {
        title: 'Snow Fight',
        duration: 30,
        time: moment('1970-01-01 00:30:00Z'),
        start: moment(),
        labels: [],
        location: {
          formattedAddress: 'Sapporo, Hokkaido, Japan',
          position: {
            lat: 1,
            lng: 1,
          },
        },
      },
    };

    const newState = reducer(state, action);

    expect(newState.cards).toEqual(
      state.cards.concat([
        {
          ...action.payload,
          id: '3',
        },
      ])
    );
  });

  it('should set adding', () => {
    const state = {
      ...defaultState,
    };
    const action: NewCard = {
      type: 'NEW_CARD',
      payload: {},
    };

    const newState = reducer(state, action);

    expect(newState.adding).toBeTruthy();
  });

  it('should cancel adding', () => {
    const state: Store = {
      ...defaultState,
      adding: null,
      cards: [],
    };
    const action: CancelNewCard = {
      type: 'CANCEL_NEW_CARD',
    };

    const newState = reducer(state, action);

    expect(newState.adding).toBeFalsy();
  });

  it('should remove card', () => {
    const state: Store = {
      ...defaultState,
      cards: [
        {
          id: '2',
          title: '',
          time: moment('1970-01-01 00:30:00Z'),
          start: moment(),
          duration: 30,
          labels: [],
          location: {
            formattedAddress: 'Sapporo, Hokkaido, Japan',
            position: {
              lat: 1,
              lng: 1,
            },
          },
        },
      ],
    };
    const action: RemoveCard = {
      type: 'REMOVE_CARD',
      payload: {
        id: '2',
      },
    };

    const newState = reducer(state, action);

    expect(newState.cards).toEqual([]);
  });
});
