//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBkTpCPn2fNj00IGmFoj-_RqmZMRkOQWxM",
    authDomain: "comp1800-ddo.firebaseapp.com",
    projectId: "comp1800-ddo",
    storageBucket: "comp1800-ddo.firebasestorage.app",
    messagingSenderId: "836005154655",
    appId: "1:836005154655:web:d4fcd6e1a47b307f64b0ea"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

