// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAs7lxjFQvVwenHKZRxg-rLKgyRJmMVxBo",
    authDomain: "pawelpazderski-mypage.firebaseapp.com",
    databaseURL: "https://pawelpazderski-mypage-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pawelpazderski-mypage",
    storageBucket: "pawelpazderski-mypage.appspot.com",
    messagingSenderId: "440299047688",
    appId: "1:440299047688:web:bb27f588022e02fc677abd",
    measurementId: "G-VWQ811D3VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const database = getDatabase(app)
