import profileReducer, {fetchUserProfileById, updateUserProfile} from './user-profile-slice.js';

let id;

describe('fetch user profile by id', () => {
  it('should fire an action to get a user profile', () => {
    store.dispatch(fetchUserProfileById(id));
    const actions = store.getActions();

    const expectedAction = {
      type: 'user/fetchUserProfileById',
      payload: id,
    };
    expect(actions).toEqual([expectedAction]);
  });
});

describe('profile reducer', () => {
  it('should return the initial state', () => {
    const expectedState =  {
      userProfile: {
        name: null,
        age: null,
        bio: null,
        skillsToTeach: [],
        skillsToLearn: [],
      },
      error: null,
    };
    expect(profileReducer(undefined, {})).toEqual(expectedState);
  });
});
