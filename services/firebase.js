import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyApyQfuGU5KFBcNqq26R_aV2MptIHJFtOk",
  authDomain: "product-hunt-9f22e.firebaseapp.com",
  projectId: "product-hunt-9f22e",
  storageBucket: "product-hunt-9f22e.appspot.com",
  messagingSenderId: "700992146982",
  appId: "1:700992146982:web:baa2f550cbc57d9bbf60e7"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();