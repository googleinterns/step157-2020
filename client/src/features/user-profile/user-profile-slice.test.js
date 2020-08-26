import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  initialState, setUserId, updateProfileState, updateUserProfile, fetchUserProfileById,
} from './user-profile-slice.js';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({user: initialState});

const id = '12345';
const userData = {
  age: 18,
  bio: 'I am a Test User',
};
const fieldToUpdate = {key: 'name', value: 'Test user'};

describe('fetch user profile', () => {
  it('should create an action to fetch a user\'s profile from the database', async () => {
    await store.dispatch(fetchUserProfileById(id));
    const actualActions = await store.getActions();
    actualActions.forEach((action) => {
      delete action.meta;
    });

    const expectedActions = [{
      type: 'user/fetchUserProfileById/pending',
      payload: undefined,
    },
    {
      type: 'user/fetchUserProfileById/fulfilled',
      payload: null,
    },
    ];
    expect(actualActions).toEqual(expectedActions);
  });
});

describe('update user profile', () => {
  it('should create an action to update the user profile', () => {
    const expectedAction = {
      type: 'user/updateUserProfile',
      payload: userData,
    };

    expect(updateUserProfile(userData)).toEqual(expectedAction);
  });
});

describe('update profile state', () => {
  it('should create an action to update the profile state', () => {
    const expectedAction = {
      type: 'user/updateProfileState',
      payload: fieldToUpdate,
    };

    expect(updateProfileState(fieldToUpdate)).toEqual(expectedAction);
  });
});

describe('set user id', () => {
  it('should create an action to set user id', () => {
    const expectedAction = {
      type: 'user/setUserId',
      payload: id,
    };

    expect(setUserId(id)).toEqual(expectedAction);
  });
});
