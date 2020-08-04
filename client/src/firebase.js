import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const databaseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9000?ns=step-xchange'
  : 'https://step-xchange.firebaseio.com';

const firebaseConfig = {
  apiKey: 'AIzaSyBa5qLWxsRvG8IvdraOZK3XUPTfB-iuCXk',
  authDomain: 'step-xchange.firebaseapp.com',
  databaseURL,
  projectId: 'step-xchange',
  storageBucket: 'step-xchange.appspot.com',
  messagingSenderId: '480097212678',
  appId: '1:480097212678:web:2e53389d4c2a4312c2e687',
  measurementId: 'G-8JR0YJXGGM',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
