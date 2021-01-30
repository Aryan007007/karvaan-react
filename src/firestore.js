import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtn3lOLM5FjeYdP-p6JyJmYvlWXiMJ4MM",
    authDomain: "karvaanshows-db.firebaseapp.com",
    projectId: "karvaanshows-db",
    storageBucket: "karvaanshows-db.appspot.com",
    messagingSenderId: "746869268374",
    appId: "1:746869268374:web:20342fc3864f22edd707b7",
    measurementId: "G-BPRG44L4QM"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;

