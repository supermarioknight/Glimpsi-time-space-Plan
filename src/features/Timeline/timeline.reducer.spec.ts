import reducer, { defaultState } from './timeline.reducer';

describe('timeline reducer', () => {
  it('should cancel adding on save', () => {
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
    const state = {
      ...defaultState,
      cards: [{ id: 2 }],
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
    const state = {
      adding: true,
    };
    const action = {
      type: 'CANCEL_NEW_CARD',
    };

    const newState = reducer(state, action);

    expect(newState.adding).toBeFalsy();
  });

  it('should remove card', () => {
    const state = {
      ...defaultState,
      cards: [{ id: 2 }],
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
