import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBa5qLWxsRvG8IvdraOZK3XUPTfB-iuCXk',
  authDomain: 'step-xchange.firebaseapp.com',
  databaseURL: 'https://step-xchange.firebaseio.com',
  projectId: 'step-xchange',
  storageBucket: 'step-xchange.appspot.com',
  messagingSenderId: '480097212678',
  appId: '1:480097212678:web:2e53389d4c2a4312c2e687',
  measurementId: 'G-8JR0YJXGGM',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
