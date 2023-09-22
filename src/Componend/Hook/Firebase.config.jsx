// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:VITE_REACT_APP_apiKey,
  authDomain:VITE_REACT_APP_authDomain,
  projectId:VITE_REACT_APP_projectId,
  storageBucket:VITE_REACT_APP_storageBucket,
  messagingSenderId:VITE_REACT_APP_messagingSenderId,
  appId:VITE_REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

