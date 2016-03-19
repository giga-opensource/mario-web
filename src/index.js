import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store/configureStore';
import App from './containers/App';
import Issues from './containers/Issues';
import Login from './containers/Login';
import NotMatch from './containers/NotMatch';

// replace this with actual initial state
const initialState = {};

const history = createBrowserHistory();
const store = configureStore(initialState);
const rootElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Issues}/>
      </Route>
      <Route path='/login' component={Login}/>
      <Route path='*' component={NotMatch}/>
    </Router>
  </Provider>,
  rootElement
);
