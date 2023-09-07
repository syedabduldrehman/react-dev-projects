// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbpSC4uYfZiKEzOj2ByEdsrlSGaFTG5G0",
  authDomain: "amazo-n-replica-e-commerce-01.firebaseapp.com",
  projectId: "amazo-n-replica-e-commerce-01",
  storageBucket: "amazo-n-replica-e-commerce-01.appspot.com",
  messagingSenderId: "770952246857",
  appId: "1:770952246857:web:b8a8c62bf35568a9d33198",
  measurementId: "G-QF461ELQ2F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
