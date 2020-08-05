import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state) {
      state.loggedIn = true;
    },
    deauthenticate(state) {
      state.loggedIn = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { authenticate, deauthenticate, setError } = authSlice.actions;
export default authSlice.reducer;
