import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4znDsziU4pKXoZQN7BvzjcRL7ln3887k",
  authDomain: "kebbinysceditorialblog.firebaseapp.com",
  projectId: "kebbinysceditorialblog",
  storageBucket: "kebbinysceditorialblog.appspot.com",
  messagingSenderId: "313885609869",
  appId: "1:313885609869:web:509a9b093e9fd5dc4ab7c4",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
