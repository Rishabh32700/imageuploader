import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCF5p2vKt79lNPLJGw-Gh5rVwVM6yifEYY",
  authDomain: "imageuploader2-f9957.firebaseapp.com",
  projectId: "imageuploader2-f9957",
  storageBucket: "imageuploader2-f9957.appspot.com",
  messagingSenderId: "969565086797",
  appId: "1:969565086797:web:f74d7f64574fae85386804",
  measurementId: "G-54V33SZSTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

