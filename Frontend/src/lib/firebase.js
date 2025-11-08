import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAesgN2CPaPN4BEQZ2Ih98rW-Yn-7JOxY",
  authDomain: "tripweaver-24e65.firebaseapp.com",
  projectId: "tripweaver-24e65",
  storageBucket: "tripweaver-24e65.firebasestorage.app",
  messagingSenderId: "233994387353",
  appId: "1:233994387353:web:876e3c8c3219f9dc791d08",
  measurementId: "G-LNRFNSWVWG"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);