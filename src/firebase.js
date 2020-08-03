import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBL-lrXasCtyFmvqw37zdXOE79cGFApIz8",
  authDomain: "tinder-clone-be906.firebaseapp.com",
  databaseURL: "https://tinder-clone-be906.firebaseio.com",
  projectId: "tinder-clone-be906",
  storageBucket: "tinder-clone-be906.appspot.com",
  messagingSenderId: "347593709718",
  appId: "1:347593709718:web:97a203d63842ba13f8cab7",
  measurementId: "G-CN710QSQ4F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
