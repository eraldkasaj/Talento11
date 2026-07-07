import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCxXZj-Aa_dpuofbQSgKcDgXK3k9Y6Pilk",
  authDomain: "talento11.firebaseapp.com",
  databaseURL: "https://talento11-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "talento11",
  storageBucket: "talento11.firebasestorage.app",
  messagingSenderId: "435471627098",
  appId: "1:435471627098:web:9a5265aaa1869b6388f963"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getDatabase(app);