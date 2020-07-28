import profileReducer, {fetchUserProfileById} from './user-profile-slice.js';

const id = '12345';

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
