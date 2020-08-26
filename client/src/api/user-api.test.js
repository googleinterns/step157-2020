import {createUser, signInUser, signOutUser} from './auth-api.js';
import {fetchUser, updateUser} from './user-api.js';
import firebase from '../firebase.js';

const initialState = {
  name: '',
  age: '',
  bio: '',
  photoUrl: '',
  skillsToTeach: [''],
  skillsToLearn: [''],
};
const email = 'test@example.com';
const password = 'password';
const history = [];
const fieldsToUpdate = {
  name: 'Test User',
  age: 17,
  bio: 'I am a Test User',
};
let userId;

afterAll(async () => {
  const user = await firebase.auth().currentUser;
  await user.delete();
});

describe('create user', () => {
  it('should create a new user in the database', async () => {
    try {
      userId = await createUser(email, password, history);
    } catch (error) {
      console.log(error);
    }
    const userData = await fetchUser(userId);

    expect(userData).toEqual(initialState);
  });

  it('should add "/profile" to the history stack', () => {
    expect(history[history.length - 1]).toEqual('/profile');
  });
});

describe('sign out user', () => {
  it('should sign out the current user', async () => {
    await signOutUser();
    const user = await firebase.auth().currentUser;
    expect(user).toEqual(null);
  });
});

describe('sign in user', () => {
  it('should sign in the newly created user', async () => {
    await signInUser(email, password, history);
    const user = await firebase.auth().currentUser;
    expect(user.uid).toEqual(userId);
  });

  it('should add "/profile" to the history stack', () => {
    expect(history[history.length - 1]).toEqual('/profile');
  });
});

describe('update user', () => {
  it('should change the user\'s data in the database', async () => {
    await updateUser(userId, fieldsToUpdate);
    const actualUserData = await fetchUser(userId);
    const expectedUserData = {...initialState, ...fieldsToUpdate};

    expect(actualUserData).toEqual(expectedUserData);
  });
});
