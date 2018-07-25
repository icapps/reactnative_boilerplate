export const isLoading = state => state.getIn(['login', 'isLoading']);
export const isLoggedIn = state => state.getIn(['login', 'isLoggedIn']);
export const getServerError = state => state.getIn(['login', 'serverError']);
export const getToken = state => state.getIn(['login', 'token']);
