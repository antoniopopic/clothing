import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyq0s6g1Mio2HKhaT205096od78ncniLg",
    authDomain: "clothing-e84c6.firebaseapp.com",
    databaseURL: "https://clothing-e84c6.firebaseio.com",
    projectId: "clothing-e84c6",
    storageBucket: "",
    messagingSenderId: "737178845066",
    appId: "1:737178845066:web:5dd3ab489745583613d273"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;