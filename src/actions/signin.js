import { LOG_OUT, SIGN_IN_SUCCESS } from "../constants";
import { signIn } from "../services/api"

export const signInPage = (data) => (dispatch) => {
  const response = signIn(data);

  if (response) {
    localStorage.setItem('signin', 'true');
    return dispatch({type: SIGN_IN_SUCCESS})
  }

  return {error: 'Invalid email or password'}
} 

export const logOutPage = dispatch => {
  localStorage.removeItem('signin');
  return dispatch({type: LOG_OUT});
}

export const auth = dispatch => {
  const isLogin = localStorage.getItem('signin');
  if (isLogin) {
    return dispatch({type: SIGN_IN_SUCCESS})
  }
}