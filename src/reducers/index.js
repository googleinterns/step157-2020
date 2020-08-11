import { combineReducers } from 'redux';

import authReducer from '../authentication/auth-slice.js';

export default combineReducers({
  auth: authReducer,
});
