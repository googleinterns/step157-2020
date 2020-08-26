import firebase from '../firebase.js';

/**
 * Fetches a user's data from the database
 * @param {string} id Id of the user
 * @returns {object} The user's profile data
 */
export const fetchUser = async (id) => {
  try {
    const snapshot = await firebase.database().ref('users').child(id).once('value');
    return snapshot.val();
  } catch (error) {
    return error;
  }
};

/**
 * Updates a user's data in the database
 * @param {string} id Id of the user
 * @param {object} userProfile The values to update the user's data with
 * @returns {undefined}
 */
export const updateUser = (id, userProfile) => {
  firebase.database().ref('users').child(id).update(userProfile);
};

/**
 * Uploads a user's profile photo to cloud storage
 * @param {string} id Id of the user
 * @param {object} img The image uploaded by the user
 * @returns {string} The download url for the uploaded image
 */
export const uploadProfilePicture = async (id, img) => {
  const profileReference = firebase.storage().ref('images').child(`${id}/profile-photo`);
  await profileReference.put(img);
  const url = await profileReference.getDownloadURL();
  return url;
};
