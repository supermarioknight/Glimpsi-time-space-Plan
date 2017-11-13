import reducer, { defaultState, Store } from './timeline.reducer';

describe('timeline reducer', () => {
  it('should cancel adding on save', () => {
    const state: Store = {
      ...defaultState,
    };
    const action = {
      type: 'SAVE_CARD',
      payload: {
        start: '2017-11-05T00:00:00',
        title: 'Snow Fight',
        location: 'Haneda, Japan',
        image: 'https://image.com',
      },
    };

    const newState = reducer(state, action);

    expect(newState.adding).toBeFalsy();
  });

  it('should add a new card', () => {
    const state = {
      ...defaultState,
    };
    const action = {
      type: 'SAVE_CARD',
      payload: {
        start: '2017-11-05T00:00:00',
        title: 'Snow Fight',
        location: 'Haneda, Japan',
        image: 'https://image.com',
      },
    };

    const newState = reducer(state, action);

    expect(newState.cards).toEqual([{
      ...action.payload,
      id: 1,
    }]);
  });

  it('should increment id if previous card exists', () => {
    const state: Store = {
      ...defaultState,
      cards: [{
        id: 2,
        title: '',
        location: '',
        start: '',
        duration: 30,
        image: '',
      }],
    };
    const action = {
      type: 'SAVE_CARD',
      payload: {
        start: '2017-11-05T00:00:00',
        title: 'Snow Fight',
        location: 'Haneda, Japan',
        duration: 30,
        image: 'https://image.com',
      },
    };

    const newState = reducer(state, action);

    expect(newState.cards).toEqual(state.cards.concat([{
      ...action.payload,
      id: 3,
    }]));
  });

  it('should set adding', () => {
    const state = {
      ...defaultState,
    };
    const action = {
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
    const action = {
      type: 'CANCEL_NEW_CARD',
    };

    const newState = reducer(state, action);

    expect(newState.adding).toBeFalsy();
  });

  it('should remove card', () => {
    const state: Store = {
      ...defaultState,
      cards: [{
        id: 2,
        title: '',
        location: '',
        start: '',
        image: '',
        duration: 30,
      }],
    };
    const action = {
      type: 'REMOVE_CARD',
      payload: {
        id: 2,
      },
    };

    const newState = reducer(state, action);

    expect(newState.cards).toEqual([]);
  });
});
