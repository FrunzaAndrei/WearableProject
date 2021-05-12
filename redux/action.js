import {
  COUNT_SAVE,
  INREGISTRARE_USER,
  LOGIN_USER,
  RESET_ERROR,
  SHOW_ERROR,
} from './constants';

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

export function showErrorMessage(title = '', message) {
  return dispatch => {
    dispatch({
      type: SHOW_ERROR,
      payload: {title, message},
    });
  };
}

export function resetErrorMessage() {
  return dispatch => {
    dispatch({
      type: RESET_ERROR,
    });
  };
}

export function saveCounter(counter) {
  return dispatch => {
    dispatch({
      type: COUNT_SAVE,
      payload: counter,
    });
  };
}
