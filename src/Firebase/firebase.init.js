// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUvLzylG4OI1t7QcDGImIEW2JN8KAu4DE",
    authDomain: "fasion-management-warehouse.firebaseapp.com",
    projectId: "fasion-management-warehouse",
    storageBucket: "fasion-management-warehouse.appspot.com",
    messagingSenderId: "943357854251",
    appId: "1:943357854251:web:2f07cd9ba0586a6d45206e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;