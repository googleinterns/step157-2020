import store from '../app/store.js';
import { authenticate, deauthenticate, setError } from '../authentication/auth-slice.js';
import firebase from '../firebase.js';

const createDefaultUserInDatabase = (id) => {
  const user = {
    name: '',
    age: 0,
    bio: '',
    skillsToTeach: [''],
    skillsToLearn: [''],
  };
  firebase.database().ref('users').child(id).set(user);
};

/**
 * Creates a new user in firebase, adds them to the database,
 * and redirects to the home page
 * @param {string} email
 * @param {string} password
 * @param {history} history used to redirect to another page
 */
export const createUser = (email, password, history) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => firebase.auth().currentUser.uid)
    .then((uid) => {
      createDefaultUserInDatabase(uid);
      store.dispatch(authenticate());
      store.dispatch(setError(null));
      history.push('/');
    })
    .catch((error) => {
      store.dispatch(setError(error.message));
    });
};

/**
 * Signs user in and redirects to the home page
 * @param {string} email
 * @param {string} password
 * @param {history} history used to redirect to another page
 */
export const signInUser = (email, password, history) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => firebase.auth().currentUser.uid)
    .then(() => {
      store.dispatch(authenticate());
      store.dispatch(setError(null));
      history.push('/');
    })
    .catch((error) => {
      store.dispatch(setError(error.message));
    });
};

/**
 * Signs user out
 */
export const signOutUser = () => {
  firebase.auth()
    .signOut()
    .then(() => {
      store.dispatch(deauthenticate());
      store.dispatch(setError(null));
      return true;
    })
    .catch((error) => {
      store.dispatch(setError(error.message));
      return false;
    });
};
