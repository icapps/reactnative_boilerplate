import { combineReducers } from 'redux-immutable';

import loginReducer from './login/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
