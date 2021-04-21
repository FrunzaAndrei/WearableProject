import {INREGISTRARE_USER, LOGIN_USER} from './constants';

export function loginUser(cnp, password) {
  return dispatch =>
    dispatch({
      type: LOGIN_USER,
      payload: {cnp, password},
    });
}

export function inregistrareUser(dateInregistrare) {
  return dispatch => {
    dispatch({
      type: INREGISTRARE_USER,
      payload: dateInregistrare,
    });
  };
}
