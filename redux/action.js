import {TEST_REDUX} from './constants';

export function changeCount(count) {
  return {
    type: TEST_REDUX,
    payload: count,
  };
}
