import { REMOVE_CARDS_INFORMATION, SET_CARDS_INFORMATION, SET_ID_DECK } from '../constants';

const initialState = {
  deckId: null,
  cards: null,
  remaining: null,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID_DECK:
      return { ...state, deckId: action.payload.deck_id };
    case SET_CARDS_INFORMATION:
      return { ...state, ...action.payload };
    case REMOVE_CARDS_INFORMATION:
      return { ...state, cards: null, remaining: null };
    default:
      return state;
  }
};

export default cardReducer;
