import {TEST_REDUX} from './constants';
import {createReducer} from './helpers';

const initialState = {
  test: 0,
};

export const countReducer = createReducer(initialState, {
  [TEST_REDUX](state, action) {
    return {
      ...state,
      test: action.payload,
    };
  },
});
