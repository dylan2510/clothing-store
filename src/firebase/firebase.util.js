import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB0GAkMlaOT72OQL1Oj0M0GkKNtsBiPG0M",
    authDomain: "clothing-store-db-f2049.firebaseapp.com",
    projectId: "clothing-store-db-f2049",
    storageBucket: "clothing-store-db-f2049.appspot.com",
    messagingSenderId: "911411037730",
    appId: "1:911411037730:web:6a12c8d792ba8c730c6c7b",
    measurementId: "G-XN4971H6GL"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  // export the libraries  we need
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Use google signin provider
  // always prompt the sign dialog when using google sign in
  // export the google sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// just in case we need the whole libraries
export default firebase;
