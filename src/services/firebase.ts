// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth"; // New import
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOifpfskc-JbQLWOFlROmVBoTihqaKgAg",
  authDomain: "devgram-6d3d6.firebaseapp.com",
  projectId: "devgram-6d3d6",
  storageBucket: "devgram-6d3d6.appspot.com",
  messagingSenderId: "87722849396",
  appId: "1:87722849396:web:83a1f1e1ea094cf7674d21",
  measurementId: "G-LJE5HWYNH2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
