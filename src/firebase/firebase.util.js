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

  // async function
  // takes in the userAuth object from response from google login
  // returns the ref to the user in firestore
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if no user exist, just exit
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // create user if data snapshot do not exist
    if (!snapShot.exists) {
      // get the displayName and email from userAuth
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } 
      catch (error) {
        console.log("error creating user", error.message);
      }
    }

    return userRef;

  }

  // Shop Data
  export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = firestore.collection(collectionKey);
    
    // firebase can only fire one operation at a time for each obj
    // create batch to batch all operations together
    const batch = firestore.batch();

    // foreach differs from map is that new array is not returned
    objectsToAdd.forEach(obj => {
      // create new doc ref with new generated id in the current collection ref
      // set the new docRef to the object, in batch
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    // perform batch commit, return a promise
    return await batch.commit();

  };

  export const convertCollectionsSnapshotToMap = (collections) => {

    const transformedCollection = collections.docs.map(doc => {
      // doc.data() returns the data of the document
      // take only title and items
      const {title, items} = doc.data();
      // for each of the docs, return the following object in new array
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    // console.log(transformedCollection);
    return transformedCollection.reduce((accumulator, collection) => 
    {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }
    , 
    {});

  }

  // Initialize Firebase
  firebase.initializeApp(config);

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      },reject)
    })
  }

  // export the libraries  we need
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Use google signin provider
  // always prompt the sign dialog when using google sign in
  // export the google sign in
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// just in case we need the whole libraries
export default firebase;
