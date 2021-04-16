import {LOGIN_USER} from './constants';
import {createReducer} from './helpers';

const initialState = {
  userLogin: {},
};

export const state = createReducer(initialState, {
  [LOGIN_USER](state, action) {
    console.log(action.payload);
    return {
      ...state,
      userLogin: action.payload,
    };
  },
});
