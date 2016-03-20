import * as ActionTypes from '../../actions/index';

export function issues(state = [], action) {
  switch (action.type) {
  case ActionTypes.ISSUES_LOADED:
    return action.items;
  default:
    return state;
  }
}
