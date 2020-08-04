import {createSlice} from '@reduxjs/toolkit';
import {createUser, signInUser, signOutUser} from '../api/user-api.js';

const initialState = {
  loggedIn: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, action) {
      if (action.payload.newUser) {
        createUser(action.payload.email, action.payload.password);
      } else {
        signInUser(action.payload.email, action.payload.password);
      }
      state.loggedIn = true;
    },
    deauthenticate(state) {
      signOutUser();
      state.loggedIn = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {authenticate, deauthenticate, setError} = authSlice.actions;
export default authSlice.reducer;
