import {LOGIN_USER} from './constants';

export function loginUser(cnp, password) {
  return dispatch =>
    dispatch({
      type: LOGIN_USER,
      payload: {cnp, password},
    });
}
