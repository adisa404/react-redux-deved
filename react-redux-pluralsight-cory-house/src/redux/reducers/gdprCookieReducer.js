import initialState from '../reducers/initialState';
import { SET_GDPR_COOKIE_STATE } from '../actions/actionTypes';

export const loadCookie = (state = initialState.gdprCookieIsSet, action) => {
  debugger;
  switch (action.type) {
    case SET_GDPR_COOKIE_STATE:
      return !action.payload;

    default:
      return state;
  }
};
