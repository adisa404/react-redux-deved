import { SET_GDPR_COOKIE_STATE } from './actionTypes';

export const setGdprCookieState = (gdprCookieIsSet) => (dispatch) =>
  dispatch({
    type: SET_GDPR_COOKIE_STATE,
    payload: gdprCookieIsSet,
  });
