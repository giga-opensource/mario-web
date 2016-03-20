export const VIEWS_LOADED = 'VIEWS_LOADED';

export function viewsLoaded(items) {
  return {
    type: VIEWS_LOADED,
    items
  };
}

// mock data
const views = [
  {name: 'View 1'},
  {name: 'View 2'}
];

export function viewsFetch() {
  return dispatch => {
    dispatch(viewsLoaded(views));
  };
}
