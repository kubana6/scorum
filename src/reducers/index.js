import { combineReducers } from 'redux';
import card from './card';
import signIn from './signin'
const rootReducer = () => combineReducers({
  card,
  signIn
}) 

export default rootReducer;