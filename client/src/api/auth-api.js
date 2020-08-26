import store from '../app/store.js';
import {authenticate, deauthenticate, setError} from '../authentication/auth-slice.js';
import {setUserId} from '../features/user-profile/user-profile-slice.js';
import firebase from '../firebase.js';

const createDefaultUserInDatabase = (id) => {
  const user = {
    name: '',
    age: '',
    bio: '',
    photoUrl: '',
    skillsToTeach: [''],
    skillsToLearn: [''],
  };
  firebase.database().ref('users').child(id).set(user);
};

/**
 * Creates a new user in firebase, adds them to the database,
 * and redirects to the profile page
 * @param {string} email Email of the user
 * @param {string} password Password of the user
 * @param {history} history Session history object
 * @returns {?string} id of the created user
 */
export const createUser = async (email, password, history) => {
  try {
    const userCredentials =  await firebase.auth().createUserWithEmailAndPassword(email, password);
    const userId = userCredentials.user.uid;
    createDefaultUserInDatabase(userId);
    store.dispatch(authenticate());
    sessionStorage.setItem('id', userId);
    store.dispatch(setUserId(userId));
    store.dispatch(setError(null));
    history.push('/profile');
    return userId;
  } catch (error) {
    store.dispatch(setError(error.message));
    return null;
  }
};

/**
 * Signs the user in and redirects to the profile page
 * @param {string} email The email of the user
 * @param {string} password The password of the user
 * @param {history} history A session history object
 * @returns {?string} id of the created user
 */
export const signInUser = async (email, password, history) => {
  try {
    const userCredentials = await firebase.auth().signInWithEmailAndPassword(email, password);
    const userId = userCredentials.user.uid;
    store.dispatch(setUserId(userId));
    store.dispatch(setError(null));
    history.push('/profile');
    return userId;
  } catch (error) {
    store.dispatch(setError(error.message));
    return null;
  }
};

/**
 * Signs the user out
 * @returns {undefined}
 */
export const signOutUser = () => {
  firebase.auth()
    .signOut()
    .then(() => {
      store.dispatch(deauthenticate());
      sessionStorage.setItem('id', null);
      store.dispatch(setUserId(null));
      store.dispatch(setError(null));
    })
    .catch((error) => {
      store.dispatch(setError(error.message));
    });
};
