import {INREGISTRARE_USER, LOGIN_USER} from './constants';
import {createReducer} from './helpers';

const initialState = {
  userLogin: {},
  dateInregistrare: {},
};

const logAction = (action, state, payload) => {
  console.log('nameAction: '.action);
  console.log('previous state: ', state);
  console.log('payload: ', payload);
};

export const state = createReducer(initialState, {
  [LOGIN_USER](state, action) {
    logAction(LOGIN_USER, state, action.payload);
    return {
      ...state,
      userLogin: action.payload,
    };
  },
  [INREGISTRARE_USER](state, action) {
    logAction(INREGISTRARE_USER, state, action.payload);
    return {
      ...state,
      dateInregistrare: action.payload,
    };
  },
});
