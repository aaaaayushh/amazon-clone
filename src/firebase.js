import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDvwEcqjUesDizNHAo9UrhzLSj7Z7logjI",
  authDomain: "clone-ba5df.firebaseapp.com",
  projectId: "clone-ba5df",
  storageBucket: "clone-ba5df.appspot.com",
  messagingSenderId: "784295817330",
  appId: "1:784295817330:web:2385adddf7e79d11a592eb",
  measurementId: "G-25P4GCESEV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//variable for firebase database
const db = firebaseApp.firestore();
//variable to help with sign in stuff
const auth = firebase.auth();
export { db, auth };
