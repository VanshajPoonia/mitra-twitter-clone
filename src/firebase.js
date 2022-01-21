import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU5NFxPeRWSzuTSTRq51QwmwRpPbi_ZbA",
  authDomain: "twitter-clone-vp.firebaseapp.com",
  databaseURL: "https://twitter-clone-vp.firebaseio.com",
  projectId: "twitter-clone-vp",
  storageBucket: "twitter-clone-vp.appspot.com",
  messagingSenderId: "229817463019",
  appId: "1:229817463019:web:6a54d349f3d5756415ceae",
  measurementId: "G-9LZQX7E2Q9",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",
//   authDomain: "twitter-clone-1faac.firebaseapp.com",
//   databaseURL: "https://twitter-clone-1faac.firebaseio.com",
//   projectId: "twitter-clone-1faac",
//   storageBucket: "twitter-clone-1faac.appspot.com",
//   messagingSenderId: "316208638057",
//   appId: "1:316208638057:web:75a37bf24fab32ff145af8",
//   measurementId: "G-HGFP2LDXP9",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
