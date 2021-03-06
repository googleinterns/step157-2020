import firebase from '../firebase.js';

const chatsDb = firebase.database().ref('chats');
const userMap = chatsDb.child('userMap');

/**
 * Returns all messages between two users
 * @param {string} senderId Id of the sender
 * @param {string} receiverId Id of the receiver
 * @param {function} callback A callback function to perform on the snapshot value, which is
 * an object with firebase-generated keys and message objects as values
 * @returns {void}
 */
export const subscribeToChatMessages = (senderId, receiverId, callback) => {
  const chatId = senderId < receiverId ? `${senderId}${receiverId}` : `${receiverId}${senderId}`;
  chatsDb.child(chatId).orderByChild('timestamp').on('value', (snapshot) => {
    callback(snapshot.val());
  });
};

/**
 * Returns a list of users
 * @param {string} userId Id of the user
 * @param {function} callback A callback function to perform on the snapshot value, which
 * is an object with firebase generated keys and userIds as values
 * @returns {void}
 */
export const subscribeToConversationList = (userId, callback) => {
  userMap.child(`${userId}`).on('value', (snapshot) => {
    callback(snapshot.val());
  });
};

/**
 * @param {string} senderId Id of the sender
 * @param {string} receiverId Id of the receiver
 * @param {Object} message An object containing a message text and a timestamp
 * @returns {void}
 */
export const sendMessage = async (senderId, receiverId, message) => {
  const snapshot = await chatsDb.once('value');
  const chatId = senderId < receiverId ? `${senderId}${receiverId}` : `${receiverId}${senderId}`;
  if (!snapshot.hasChild(chatId)) {
    userMap.child(senderId).push(receiverId);
    userMap.child(receiverId).push(senderId);
  }
  chatsDb.child(chatId).push(message);
};
