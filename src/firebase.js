import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCybbrwPDFxFsaYC-iLvwyU81TbbNAq1dI",
  authDomain: "twitter-clone-c700d.firebaseapp.com",
  projectId: "twitter-clone-c700d",
  storageBucket: "twitter-clone-c700d.appspot.com",
  messagingSenderId: "761543807347",
  appId: "1:761543807347:web:542bba9eab6ac53065f506",
  measurementId: "G-K9RXRBFDTM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
