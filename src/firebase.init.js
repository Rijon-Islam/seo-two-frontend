// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOnVMhwZLS6CCL6Co2bo_WU4tEHff5ivw",
  authDomain: "rjnecommerceseo.firebaseapp.com",
  projectId: "rjnecommerceseo",
  storageBucket: "rjnecommerceseo.appspot.com",
  messagingSenderId: "779046721499",
  appId: "1:779046721499:web:52aa15d0881e76209639fe"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;