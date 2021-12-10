import { LOG_OUT, SIGN_IN_SUCCESS } from '../constants';

const initialState = {
  login: false,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, login: true };
    case LOG_OUT:
      return { ...state, login: false };
    default:
      return state;
  }
};

export default signInReducer;
