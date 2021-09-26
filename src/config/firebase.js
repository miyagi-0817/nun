import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCk8jGfEbWf4XDVkegntrjJu1bX1BsR2wg",
  authDomain: "no-neet.firebaseapp.com",
  projectId: "no-neet",
  storageBucket: "no-neet.appspot.com",
  messagingSenderId: "706314237888",
  appId: "1:706314237888:web:1bdf0337e8cb87d334ba25",
  measurementId: "G-7PEC2ZVPWG",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
