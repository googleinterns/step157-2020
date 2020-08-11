import firebase from '../firebase.js';

var skillsRef = firebase.database().ref.child("skills");

skillsRef.set({
  sports: {
      desc: 'sports category',
      subskills: ['sports1', 'sports2', 'sports3']
  }
});