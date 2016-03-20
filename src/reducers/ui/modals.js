import * as ActionTypes from '../../actions/index';

export function modals(state = {
  items: [],
  enableClose: true
}, action) {
  let newItems;
  switch (action.type) {
  case ActionTypes.MODAL_OPEN:
    newItems = state.items.slice();
    newItems.push(action.item);
    return Object.assign({}, state, {
      items: newItems,
      enableClose: false
    });
  case ActionTypes.MODAL_ENABLE_CLOSE:
    return Object.assign({}, state, {
      enableClose: true
    });
  case ActionTypes.MODAL_CLOSE:
    if (!state.enableClose) return state;
    return Object.assign({}, state, {
      items: []
    });
  case ActionTypes.MODAL_GO_BACK:
    newItems = state.items.slice();
    for (let i = 0; i < action.times; i++) {
      newItems.pop();
    }
    return Object.assign({}, state, {
      items: newItems
    });
  default:
    return state;
  }
}
