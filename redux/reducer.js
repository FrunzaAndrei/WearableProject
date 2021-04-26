import {
  INREGISTRARE_USER,
  LOGIN_USER,
  RESET_ERROR,
  SHOW_ERROR,
} from './constants';
import {createReducer} from './helpers';

const initialState = {
  userLogin: {},
  dateInregistrare: {},
  errorMessage: null,
  doneInreg: false,
};

const logAction = (action, state, payload) => {
  console.log('nameAction: '.action);
  console.log('previous state: ', state);
  console.log('payload: ', payload);
};

export const data = createReducer(initialState, {
  [LOGIN_USER](state, action) {
    logAction(LOGIN_USER, state, action.payload);
    return {
      ...state,
      doneInreg: false,
      userLogin: action.payload,
    };
  },
  [INREGISTRARE_USER](state, action) {
    logAction(INREGISTRARE_USER, state, action.payload);
    return {
      ...state,
      doneInreg: true,
      dateInregistrare: action.payload,
    };
  },
  [SHOW_ERROR](state, action) {
    logAction(SHOW_ERROR, state, action.payload);
    return {
      ...state,
      errorMessage: action.payload,
    };
  },
  [RESET_ERROR](state) {
    return {
      ...state,
      errorMessage: null,
    };
  },
});
