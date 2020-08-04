import firebase from '../firebase.js';

const storeNewUserInDatabase = (id) => {
  const user = {
    name: '',
    age: '',
    bio: '',
    skillsToTeach: [''],
    skillsToLearn: [''],
  };
  firebase.database().ref('users').child(id).set(user);
};

export const createUser = (email, password) => {
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => firebase.auth().currentUser.uid)
    .then((uid) => {
      storeNewUserInDatabase(uid);
    })
    .catch(() => {});
};

export const signInUser = (email, password) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => firebase.auth().currentUser.uid)
    .then((uid) => uid)
    .catch(() => {});
};

export const signOutUser = () => {
  firebase.auth().signOut().then(() => {}).catch(() => {});
};

export const fetchUser = async (id) => {
  const snapshot = await firebase.database().ref('users').child(id).once('value');
  return snapshot.val();
};

export const updateUser = (id, userProfile) => {
  firebase.database().ref('users').child(id).update(userProfile);
};

export const uploadProfilePicture = async (id, file) => {
  const profileReference = firebase.storage().ref('images').child(`${id}/profile`);
  await profileReference.put(file);
  const url = await profileReference.getDownloadURL();
  return url;
};
