import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACxZzfvMYTZSQqmITI1O99Q74C-HRndnY",
  authDomain: "london-2fb1f.firebaseapp.com",
  projectId: "london-2fb1f",
  storageBucket: "london-2fb1f.appspot.com",
  messagingSenderId: "620042706803",
  appId: "1:620042706803:web:cbe67c988e8dae9d36ef06",
  measurementId: "G-TLCZHDTZNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };