import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from './middleware/promiseMiddleware';
import loggerMiddleware from './middleware/loggerMiddleware';

import rootReducer from './rootReducer';

const middleware = [promiseMiddleware(), thunkMiddleware, loggerMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
