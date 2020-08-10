import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers';

/**
 * Allows other files to call reducer functions via dispatch
 */
const store = configureStore({
  reducer: rootReducer,
});

export default store;
