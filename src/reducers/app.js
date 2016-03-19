import * as ActionTypes from '../actions/index';

export function app(state = [], action) {
  switch (action.type) {
  case ActionTypes.APPLICATION_STARTED:
    return action.status;
  default:
    return state;
  }
}
