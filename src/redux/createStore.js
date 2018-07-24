import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from './middleware/promiseMiddleware';

import rootReducer from './rootReducer';

const middleware = [promiseMiddleware(), thunkMiddleware];

// Logger MUST be the last middleware in the middleware array
if (__DEV__ !== 'production') { // eslint-disable-line
  const logger = createLogger({
    collapsed: true,
    logger: console,
    colors: {
      title: (action) => {
        if (action.type.endsWith('FULFILLED')) return '#006400';
        if (action.type.endsWith('REJECTED')) return '#B31B1B';
        return '#222222';
      },
      prevState: () => '#9E9E9E',
      action: () => '#03A9F4',
      nextState: () => '#4CAF50',
      error: () => '#F20404',
    },
  });
  middleware.push(logger);
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
