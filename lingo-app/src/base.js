import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAr0iqLggDab49hnAKIBIMjD20kMMDbd8",
  authDomain: "lingolift-c09c1.firebaseapp.com",
  databaseURL: "https://lingolift-c09c1-default-rtdb.firebaseio.com",
  projectId: "lingolift-c09c1",
  storageBucket: "lingolift-c09c1.appspot.com",
  messagingSenderId: "97264831102",
  appId: "1:97264831102:web:a53ba340bf36a49f07262f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);