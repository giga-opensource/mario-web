import { combineReducers } from 'redux';
import { app } from './app';
import {
  views,
  issues,
} from './data/index';

const rootReducer = combineReducers({
  views,
  issues,
  app
});

export default rootReducer;
