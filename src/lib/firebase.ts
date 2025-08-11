// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Tambahkan import untuk database

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_lMd46ccaxi8KtNTzZCNKzQM5Fr_TfHw",
  authDomain: "message-4dfa4.firebaseapp.com",
  databaseURL: "https://message-4dfa4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "message-4dfa4",
  storageBucket: "message-4dfa4.firebasestorage.app",
  messagingSenderId: "85005666907",
  appId: "1:85005666907:web:87e15ac18fd7c918e04d7e",
  measurementId: "G-BVLE4YKNSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Inisialisasi database

export { app, analytics, database }; // Export database