import { Map } from 'immutable';
import * as actionTypes from './types';

const initialState = new Map({
  isLoggedIn: false,
  isLoading: false,
  serverError: null,
  token: null,
});

const login = (state = initialState, action) => {
  const { payload, error } = action;
  switch (action.type) {
    case actionTypes.LOGIN_PENDING:
      return state.set('isLoading', true);

    case actionTypes.LOGIN_FULFILLED:
      return state
        .set('isLoggedIn', true)
        .set('isLoading', false)
        .set('token', payload.token);
    case actionTypes.LOGIN_REJECTED:
      return state
        .set('serverError', error.message)
        .set('isLoading', false);
    default:
      return state;
  }
};

export default login;
