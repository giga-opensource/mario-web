import * as ActionTypes from '../../actions/index';

export function views(state = [], action) {
  switch (action.type) {
  case ActionTypes.VIEWS_LOADED:
    return action.items;
  default:
    return state;
  }
}
