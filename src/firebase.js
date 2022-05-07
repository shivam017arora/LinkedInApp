import firebase from 'firebase';
import config from './config';

const firebaseConfig = config

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
