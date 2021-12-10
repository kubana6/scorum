import {
  UPDATE_BALANCE, START_BALANCE, RIGHT, LEFT,
} from '../constants';

export const checkBalance = (dispatch) => {
  const balance = localStorage.getItem('balance');
  const currentBalance = Number(balance);
  if (!currentBalance) {
    return dispatch(updateBalance(START_BALANCE));
  }

  dispatch(updateBalance(currentBalance));
};

export const updateBalance = (balance) => (dispatch) => {
  localStorage.setItem('balance', balance);
  dispatch({ type: UPDATE_BALANCE, payload: balance });
};

export const startGameCards = (dispatch, getState) => {
  const { currentBalance, currentRate } = getState().balance;
  dispatch(updateBalance(currentBalance - currentRate));
};

export const checkResult = (side) => (dispatch, getState) => {
  const { cards } = getState().card;
  const { currentBalance, currentRate } = getState().balance;
  const userCards = cards[side];

  const onWinner = () => currentBalance + (currentRate * 2);

  const onTie = () => currentBalance + currentRate;

  const getResult = (sideOpponent) => {
    const opponent = cards[sideOpponent];
    if (userCards.code > opponent.code) {
      dispatch(updateBalance(onWinner()));
      return currentRate;
    }

    if (userCards.code === opponent.code) {
      dispatch(updateBalance(onTie()));
      return 0;
    }
    return -currentRate;
  };

  switch (side) {
    case LEFT:
      return getResult(RIGHT);
    case RIGHT:
      return getResult(LEFT);
    default:
      return 0;
  }
};
