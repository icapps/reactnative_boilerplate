import { createLogger } from 'redux-logger';

// log actions in development mode
export default createLogger({
  collapsed: true,
  duration: true,
  level: 'info',
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

  /* global __DEV__ */
  // only log in development mode
  predicate: () => __DEV__,

  // transform immutable state to plain objects
  stateTransformer: state => state.toJS(),

  // transform immutable action payloads to plain objects
  actionTransformer: action => (
    action && action.payload && action.payload.toJS
      ? { ...action, payload: action.payload.toJS() }
      : action
  ),
});
