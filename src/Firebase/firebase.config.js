// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyF5pNwj8hCAIoIwCnRDBuOqrpnwV8mzo",
    authDomain: "car-doctor-e5821.firebaseapp.com",
    projectId: "car-doctor-e5821",
    storageBucket: "car-doctor-e5821.appspot.com",
    messagingSenderId: "1014287926182",
    appId: "1:1014287926182:web:a39823e77ef9e825818567"
};

// Initialize Firebase
export const app = initializeApp( firebaseConfig );