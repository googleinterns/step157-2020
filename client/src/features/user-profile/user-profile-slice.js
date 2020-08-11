import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchUser, updateUser} from '../../api/user-api.js';

/*
* Redux action to update the state with the user data
*/
export const fetchUserProfileById = createAsyncThunk(
  'user/fetchUserProfileById',
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
