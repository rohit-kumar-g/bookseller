import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm6DRQIH7SVLPp42kyfh474CQgHKZV4n4",
  authDomain: "ecoom-c11c8.firebaseapp.com",
  databaseURL: "https://ecoom-c11c8-default-rtdb.firebaseio.com",
  projectId: "ecoom-c11c8",
  storageBucket: "ecoom-c11c8.appspot.com",
  messagingSenderId: "638223939812",
  appId: "1:638223939812:web:4917730561b9e9cf70d4f1"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
