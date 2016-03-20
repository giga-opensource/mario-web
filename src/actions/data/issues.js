export const ISSUES_LOADED = 'ISSUES_LOADED';

export function issuesLoaded(items) {
  return {
    type: ISSUES_LOADED,
    items
  };
}

// mock data
const issues = [{
  id: 1023,
  subject: 'Story Title, flow to the next line',
  priority: 'High',
  release: '0.7.3',
  assign: 'Xiaoguang Chen',
  news: 'Lyra upload an image.',
  status: 1
}];

export function issuesFetch() {
  return dispatch => {
    dispatch(issuesLoaded(issues));
  };
}
