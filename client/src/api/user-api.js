import firebase from '../firebase.js';
import {setError, authenticate, deauthenticate} from '../authentication/auth-slice.js';
import {store} from '../index.js';

const storeUserInDatabase = (id) => {
  const user = {
    name: 'Jo Bamba',
    age: 22,
    bio: 'Click edit to edit your bio!',
    skillsToTeach: ['sports'],
    skillsToLearn: ['cooking'],
  };
  firebase.database().ref('users').child(id).set(user);
};

export const createUser = (email, password) => {
  firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => firebase.auth().currentUser.uid)
      .then((uid) => {
        storeUserInDatabase(uid);
        store.dispatch(authenticate());
        store.dispatch(setError(null));
      })
      .catch((error) => {
        store.dispatch(setError(error.message));
      });
};

export const signInUser = (email, password) => {
  firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => firebase.auth().currentUser.uid)
      .then(() => {
        store.dispatch(authenticate());
        store.dispatch(setError(null));
      })
      .catch((error) => {
        store.dispatch(setError(error.message));
      });
};

export const signOutUser = () => {
  firebase.auth().signOut().then(() => {
    store.dispatch(deauthenticate());
  }).catch((error) => {
    store.dispatch(setError(error.message));
  });
};
