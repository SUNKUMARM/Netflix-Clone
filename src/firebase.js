import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtneuYt_DKXGWJThgKB_996qryh8ynEFo",
  authDomain: "netflix-clone-7f502.firebaseapp.com",
  projectId: "netflix-clone-7f502",
  storageBucket: "netflix-clone-7f502.appspot.com",
  messagingSenderId: "218202137",
  appId: "1:218202137:web:62c6b923ffbac43b582a88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
