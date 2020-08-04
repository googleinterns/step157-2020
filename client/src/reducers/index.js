import {combineReducers} from 'redux';
import profileReducer from '../features/user-profile/user-profile-slice.js';
import authReducer from '../authentication/auth-slice.js';

export default combineReducers({
  auth: authReducer,
  user: profileReducer,
});
