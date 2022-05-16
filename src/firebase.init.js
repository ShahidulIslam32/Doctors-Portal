import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAg5sqH0jgcoD8LOFKvs2ros8HBgthGXeY",
    authDomain: "doctors-portal-5c473.firebaseapp.com",
    projectId: "doctors-portal-5c473",
    storageBucket: "doctors-portal-5c473.appspot.com",
    messagingSenderId: "624578119579",
    appId: "1:624578119579:web:20b3b629c165aa577d833e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;