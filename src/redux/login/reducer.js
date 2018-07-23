import * as actionTypes from './types';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  serverError: null,
  token: null,
};

const login = (state = initialState, action) => {
  const { payload, error } = action;
  switch (action.type) {
    case actionTypes.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOGIN_FULFILLED:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        token: payload.token,
      };
    case actionTypes.LOGIN_REJECTED:
      return {
        ...state,
        serverError: error.message,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default login;
