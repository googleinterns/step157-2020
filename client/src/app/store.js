import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

/**
 * Contains the state for the app
 */
const store = configureStore({
  reducer: rootReducer,
});

export default store;
