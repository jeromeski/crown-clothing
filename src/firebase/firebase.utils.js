import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA-71VNYWZdsmgQtqozgavo7JYoFFeVMnA",
  authDomain: "crown-clothing-c296f.firebaseapp.com",
  databaseURL: "https://crown-clothing-c296f.firebaseio.com",
  projectId: "crown-clothing-c296f",
  storageBucket: "crown-clothing-c296f.appspot.com",
  messagingSenderId: "872278668125",
  appId: "1:872278668125:web:0be0b3ae7b2678914a6eb4",
  measurementId: "G-BM1MV7PWZZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user')
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;