import {combineReducers} from 'redux';
import profileReducer from '../features/user-profile/user-profile-slice.js';

export default combineReducers({
  user: profileReducer,
});
