// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7uZJPRHhq6cy0N4-zD5BucCjVzHbDiTo",
  authDomain: "shipswift-e0bc7.firebaseapp.com",
  projectId: "shipswift-e0bc7",
  storageBucket: "shipswift-test",
  messagingSenderId: "83641616616",
  appId: "1:83641616616:web:8df0b4a84db74007a6e15d",
  measurementId: "G-S9S97BN3ZY"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export {
  // firebaseAdmin,
  firebase as default
}