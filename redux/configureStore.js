import {createStore, combineReducers} from 'redux';
import * as pageReducer from './reducer';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(Object.assign(pageReducer));

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
