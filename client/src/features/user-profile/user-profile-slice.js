import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchUser, updateUser} from '../../api/user-api.js';

/*
* Redux thunk action creator for user profile fetching
*/
export const fetchUserProfileById = createAsyncThunk(
  'user/fetchUserProfileById',
  /**
  * Redux action to update the state with the user data
  * @param {string} id Id of the user
  * @returns {object} The user data
  */
  async (id) => {
    const response = await fetchUser(id);
    return response;
  },
);

const initialState = {
  id: sessionStorage.getItem('id'),
  userProfile: {
    photoUrl: '',
    name: '',
    age: '',
    bio: '',
    skillsToTeach: [],
    skillsToLearn: [],
  },
  error: null,
};

const profileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserProfile(state, action) {
      updateUser(action.payload.id, action.payload.data);
    },
    updateProfileState(state, action) {
      state.userProfile[action.payload.key] = action.payload.value;
    },
    setUserId(state, action) {
      state.id = action.payload;
    },
  },
  extraReducers: {
    [fetchUserProfileById.fulfilled]: (state, action) => {
      state.userProfile = action.payload;
    },
    [fetchUserProfileById.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {updateUserProfile, updateProfileState, setUserId} = profileSlice.actions;

export default profileSlice.reducer;
