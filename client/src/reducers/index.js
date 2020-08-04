import {combineReducers} from 'redux';

import authReducer from '../authentication/auth-slice.js';
import profileReducer from '../features/user-profile/user-profile-slice.js';

export default combineReducers({
  auth: authReducer,
  user: profileReducer,
});
