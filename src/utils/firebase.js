// import { initializeApp } from 'firebase/app';
// import {getAnalytics} from "firebase/analytics"
// import {getAuth} from "firebase/auth";

// const  firebaseConfig = {
//     apiKey: "API_KEY",
//     authDomain: "PROJECT_ID.firebaseapp.com",
//     // The value of `databaseURL` depends on the location of the database
//     databaseURL: "https://DATABASE_NAME.firebaseio.com",
//     projectId: "PROJECT_ID",
//     // The value of `storageBucket` depends on when you provisioned your default bucket (learn more)
//     storageBucket: "PROJECT_ID.firebasestorage.app",
//     messagingSenderId: "SENDER_ID",
//     appId: "APP_ID",
//     // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
//     measurementId: "G-MEASUREMENT_ID",
//   };
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   export const auth  = getAuth();

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_FIREBASE_KEY,
//   authDomain: "netflixgpt-73521.firebaseapp.com",
//   projectId: "netflixgpt-73521",
//   storageBucket: "netflixgpt-73521.appspot.com",
//   messagingSenderId: "367639559616",
//   appId: "1:367639559616:web:238d6dc299f659bd5adc25",
//   measurementId: "G-LBTYLHTCXS"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPiN7FpVZwMTjg23s61zY1GHQVhmNajsQ",
  authDomain: "netflix-gpt-main-b992c.firebaseapp.com",
  projectId: "netflix-gpt-main-b992c",
  storageBucket: "netflix-gpt-main-b992c.firebasestorage.app",
  messagingSenderId: "509300497749",
  appId: "1:509300497749:web:ade281e371939df04d23dc",
  measurementId: "G-TRR3B2NLZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();