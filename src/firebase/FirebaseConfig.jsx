// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxH25UFlGIC6kSxoDLMEcej1sV2U6mDys",
  authDomain: "unistore-21d11.firebaseapp.com",
  projectId: "unistore-21d11",
  storageBucket: "unistore-21d11.appspot.com",
  messagingSenderId: "209005192156",
  appId: "1:209005192156:web:846e2d61d08679b8f5a519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }