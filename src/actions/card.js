import { REMOVE_CARDS_INFORMATION, SET_CARDS_INFORMATION, SET_ID_DECK } from '../constants';
import { getDeckCards, getCards } from '../services/api';

export const getDeckCardsInformation = () => async (dispatch) => {
  try {
    const { data } = await getDeckCards();
    dispatch({ type: SET_ID_DECK, payload: data });
    return data;
  } catch (error) {
    return errror
  }
};
export const getCardsInformation = (deckId) => async (dispatch) => {
  try {
    const { data } = await getCards(deckId);
    dispatch({
      type: SET_CARDS_INFORMATION,
      payload: {
        cards: data.cards,
        remaining: data.remaining,
      },
    });

    if (!data.remaining) {
      dispatch(getDeckCardsInformation());
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const removeCards = (dispatch) => {
  dispatch({ type: REMOVE_CARDS_INFORMATION });
};
