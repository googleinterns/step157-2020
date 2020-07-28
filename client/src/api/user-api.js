import firebase from '../firebase.js';

const storeUserInDatabase = (id) => {
  const user = {
    name: '',
    age: '',
    bio: '',
    skillsToTeach: [''],
    skillsToLearn: [''],
  };
  firebase.database().ref('users').child(id).set(user);
};

export const createUser = (email, password, callback) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => userCredential.user.uid)
    .then((uid) => {
      storeUserInDatabase(uid);
      callback(uid);
    })
    .catch((error) => error);
};

export const signInUser = (email, password, callback) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => firebase.auth().currentUser.uid)
    .then((uid) => { callback(uid); })
    .catch((error) => error);
};

export const signOutUser = () => {
  firebase.auth().signOut().then(() => {}).catch((error) => error);
};

export const fetchUser = async (id) => {
  const snapshot = await firebase.database().ref('users').child(id).once('value');
  return snapshot.val();
};

export const updateUser = (id, userProfile) => {
  firebase.database().ref('users').child(id).update(userProfile);
};
