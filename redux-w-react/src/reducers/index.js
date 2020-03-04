import counterReducer from './counter';
import isLoggedInReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counterReducer: counterReducer,
  isLoggedInReducer: isLoggedInReducer
});

export default allReducers;
