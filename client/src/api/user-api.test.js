import {createUser} from './auth-api.js';
import {fetchUser} from './user-api.js';
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

afterAll(async () => {
  const user = await firebase.auth().currentUser;
  await user.delete();
});

describe('create user', () => {
  it('should create a new user in the database', async () => {
    let userId;
    try {
      userId = await createUser(email, password, history);
    } catch (error) {
      console.log(error);
    }
    const userData = await fetchUser(userId);

    expect(userData).toEqual(initialState);
  });

  it('should add "/profile" to the history stack', () => {
    expect(history).toEqual(['/profile']);
  });
});
