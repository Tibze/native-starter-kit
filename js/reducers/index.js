
import { combineReducers } from 'redux';
import AppNavigator from '../AppNavigator';

import user from './user';
import list from './list';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default combineReducers({
  nav: navReducer,
  user,
  list,

});
