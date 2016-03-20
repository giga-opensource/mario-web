import { combineReducers } from 'redux';
import { app } from './app';
import {ui} from './ui/index';
import {
  views,
  issues,
} from './data/index';

const rootReducer = combineReducers({
  views,
  issues,
  ui,
  app
});

export default rootReducer;
