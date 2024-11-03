import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJFWN7zIds02OAU5yaYF-QvPc9PUkBjoQ",
  authDomain: "react-notes-3e989.firebaseapp.com",
  projectId: "react-notes-3e989",
  storageBucket: "react-notes-3e989.firebasestorage.app",
  messagingSenderId: "1023251040644",
  appId: "1:1023251040644:web:f9bf3db43b6a16bdeeb5d1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")