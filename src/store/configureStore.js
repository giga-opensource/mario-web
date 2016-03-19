import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import createLogger from 'redux-logger';

const logger = createLogger();
let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'development') {
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware, logger
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
  )(createStore);
}

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // Webpack will add a es6module marker when using commonjs
      //   require funciton, so we have to unpack it.
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
