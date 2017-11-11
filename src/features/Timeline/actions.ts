import { Card } from './timeline.reducer';

export const saveCard = (card: Card) => ({
  type: 'SAVE_CARD',
  payload: {
    ...card,
  },
});

export const newCard = () => ({
  type: 'NEW_CARD',
});

export const removeCard = (id: number) => ({
  type: 'REMOVE_CARD',
  payload: {
    id,
  },
});

export const updateTimeline = (data: Object) => ({
  type: 'UPDATE_TIMELINE',
  payload: data,
})

export const cancelNewCard = () => ({
  type: 'CANCEL_NEW_CARD',
});
