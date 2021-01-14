import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyACepZl7CEUCZeNmNh6xk-w11GiTOmcALg",
    authDomain: "clone-fb244.firebaseapp.com",
    projectId: "clone-fb244",
    storageBucket: "clone-fb244.appspot.com",
    messagingSenderId: "428621620038",
    appId: "1:428621620038:web:d2a6239cf0fc36fb37fb47",
    measurementId: "G-LQ1T7N3QZF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const Provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, Provider };