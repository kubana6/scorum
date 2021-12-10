import { UPDATE_BALANCE, ADD_START_BALANCE, START_BALANCE } from '../constants';

const initialState = {
  currentBalance: START_BALANCE,
  currentRate: 10,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BALANCE:
      return { ...state, currentBalance: action.payload };
    case ADD_START_BALANCE:
      return { ...state, currentBalance: START_BALANCE };
    default:
      return state;
  }
};

export default cardReducer;
