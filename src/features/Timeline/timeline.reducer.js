// @flow

export const defaultState = {
  adding: false,
  cards: [],
};

export default (store, action) => {
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
        cards: store.cards.filter((card) => card.id !== action.payload.id),
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
        const newCard = {
          ...card,
          id: (store.cards[store.cards.length - 1] || { id: 0 }).id + 1,
        };

        cards = [].concat(store.cards).concat([newCard]);
      } else {
        cards = store.cards.map((storeCard) => storeCard.id === card.id ? card : storeCard);
      }

      return {
        ...store,
        cards,
        adding: false,
      };
    }

    default:
      return undefined;
  }
};
