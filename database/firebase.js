// const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// admin.initializeApp(functions.config().firebase);

// var db = admin.firestore();

// var topsCollection = db.collection('tops').doc('topOne');

// var topOne = topsCollection.set({
//   imageUrl: 'https://www.gap.com/webcontent/0013/463/897/cn13463897.jpg',
//   occassion: 'casual',
//   season: 'fall',
//   color: 'blue',
//   category: {
//     body: 'top',
//     type: 't-shirt',
//   },
// });

// db.collection('tops')
//   .get()
//   .then(() => {
//     console.log(doc.id);
//   });

import * as firebase from 'firebase';

let Firebase = firebase.initializeApp({
  apiKey: 'AIzaSyBWraWn6i8CN1iCybjo4RWa-kcReB_YEaA',
  authDomain: 'personallyme-926de.firebaseapp.com',
  databaseURL: 'https://personallyme-926de.firebaseio.com',
  storageBucket: 'personallyme-926de.appspot.com',
});

module.exports = Firebase;
