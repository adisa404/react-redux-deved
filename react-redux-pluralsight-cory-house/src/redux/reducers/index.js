import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import apiCallsInProgress from './apiStatusReducer';
import { loadCookie } from './gdprCookieReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
  gdprCookieIsSet: loadCookie,
});

export default rootReducer;
