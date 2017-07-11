import firebase from 'firebase';
  // Initialize Firebase
const config = {
    apiKey: "AIzaSyC4TC32osTfNxJRAoIiIhmf8aoMgQRV9c4",
    authDomain: "intro-to-firebase-90a9c.firebaseapp.com",
    databaseURL: "https://intro-to-firebase-90a9c.firebaseio.com",
    projectId: "intro-to-firebase-90a9c",
    storageBucket: "intro-to-firebase-90a9c.appspot.com",
    messagingSenderId: "916031988090"
  };

  firebase.initializeApp(config);

  export default firebase;

  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
