import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication

const config = {
  apiKey: "AIzaSyCw0-VYXabAE9Y4E3yfBA0Z_sr8plm-tts",
  authDomain: "crwn-db-d050e.firebaseapp.com",
  databaseURL: "https://crwn-db-d050e.firebaseio.com",
  projectId: "crwn-db-d050e",
  storageBucket: "crwn-db-d050e.appspot.com",
  messagingSenderId: "53553698926",
  appId: "1:53553698926:web:74ee15aebe95c785ef2e7f",
  measurementId: "G-HBVK2638ZZ",
};

firebase.initializeApp(config);

//good to export them now
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//will pop up a new window and ask to select a google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;