// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDM8oefWcODmyrcQQkCfHrL2sqMXP7Wd3A",
    authDomain: "sitemate-ac0fa.firebaseapp.com",
    projectId: "sitemate-ac0fa",
    storageBucket: "sitemate-ac0fa.appspot.com",
    messagingSenderId: "99176146871",
    appId: "1:99176146871:web:9a9ab540d76d98b7412a32",
    measurementId: "G-729JEMDDXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
