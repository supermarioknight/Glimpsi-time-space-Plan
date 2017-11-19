import reducer, { Store } from './reducer';
import { SaveCard, NewCard, CancelNewCard, RemoveCard } from './actions';

export const defaultState: Store = {
  adding: false,
  cards: [],
  start: '',
  end: '',
};

describe('timeline reducer', () => {
  it('should cancel adding on save', () => {
    const state: Store = {
      ...defaultState,
    };
    const action: SaveCard = {
      type: 'SAVE_CARD',
      payload: {
        start: '2017-11-05T00:00:00',
        title: 'Snow Fight',
        location: 'Haneda, Japan',
        duration: 50,
        position: {
          lat: 50,
          lng: 50,
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
        start: '2017-11-05T00:00:00',
        title: 'Snow Fight',
        location: 'Haneda, Japan',
        duration: 50,
        position: {
          lat: 50,
          lng: 50,
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
          id: 2,
          title: '',
          location: '',
          start: '',
          duration: 30,
          position: {
            lat: 1,
            lng: 2,
          },
        },
      ],
    };
    const action: SaveCard = {
      type: 'SAVE_CARD',
      payload: {
        start: '2017-11-05T00:00:00',
        title: 'Snow Fight',
        location: 'Haneda, Japan',
        duration: 30,
        position: {
          lat: 1,
          lng: 2,
        },
      },
    };

    const newState = reducer(state, action);

    expect(newState.cards).toEqual(
      state.cards.concat([
        {
          ...action.payload,
          id: 3,
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
    };

    const newState = reducer(state, action);

    expect(newState.adding).toBeTruthy();
  });

  it('should cancel adding', () => {
    const state: Store = {
      adding: true,
      cards: [],
      start: '',
      end: '',
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
          id: 2,
          title: '',
          location: '',
          start: '',
          image: '',
          duration: 30,
          position: {
            lat: 1,
            lng: 2,
          },
        },
      ],
    };
    const action: RemoveCard = {
      type: 'REMOVE_CARD',
      payload: {
        id: 2,
      },
    };

    const newState = reducer(state, action);

    expect(newState.cards).toEqual([]);
  });
});
