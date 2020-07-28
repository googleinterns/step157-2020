import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchUser, updateUser} from '../../api/user-api.js';

export const fetchUserProfileById = createAsyncThunk(
  'user/fetchUserProfileById',
  async (id) => {
    const response = await fetchUser(id);
    return response;
  },
);

const initialState = {
  id: null,
  userProfile: {
    name: null,
    age: null,
    bio: null,
    skillsToTeach: [],
    skillsToLearn: [],
  },
  error: null,
};

const profileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateUserProfile(state, action) {
      updateUser(action.payload.id, action.payload.data);
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

export const {updateUserProfile} = profileSlice.actions;

export default profileSlice.reducer;
