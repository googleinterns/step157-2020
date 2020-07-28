import firebase from '../firebase.js';

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
      })
      .catch((error) => error);
};

export const signInUser = (email, password) => {
  firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => firebase.auth().currentUser.uid)
      .then((uid) => uid)
      .catch((error) => error);
};

export const signOutUser = () => {
  firebase.auth().signOut().then(() => {}).catch((error) => error);
};
