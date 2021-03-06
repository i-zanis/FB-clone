// installation [npm i firebase]
// Firebase Test Mode Database
import firebase from "firebase";

// Info taken from Firebase Registration
var firebaseConfig = {
    apiKey: "AIzaSyDXWGSnH0MTX6JQyq2_mSd1I6QfabGdHWs",
    authDomain: "facebook-clone-3c12b.firebaseapp.com",
    projectId: "facebook-clone-3c12b",
    storageBucket: "facebook-clone-3c12b.appspot.com",
    messagingSenderId: "456696118708",
    appId: "1:456696118708:web:f223961739c26150bec6e1",
    measurementId: "G-FJGRQZJS16"
};

// connect Firebase to App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Access the database
const db = firebaseApp.firestore();
// Authentication |
const auth = firebase.auth();
//  Add the provider to App | Google Login Enabled
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;