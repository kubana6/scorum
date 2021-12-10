import { combineReducers } from 'redux';
import card from './card';
import signIn from './signin';
import balance from './balance';

const rootReducer = () => combineReducers({
  card,
  signIn,
  balance,
});

export default rootReducer;
