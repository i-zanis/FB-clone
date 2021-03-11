// installation [npm i firebase]
// Firebase Test Mode Database
import firebase from "firebase";

// Info taken from Firebase Registration
var firebaseConfig = {
        apiKey: "AIzaSyDXWGSnH0MTX6JQyq2_mSd1I6QfabGdHWs",
        authDomain: "facebook-clone-3c12b.firebaseapp.com",
        databaseURL: "https://facebook-clone-3c12b-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "facebook-clone-3c12b",
        storageBucket: "facebook-clone-3c12b.appspot.com",
        messagingSenderId: "456696118708",
        appId: "1:456696118708:web:7857817fc12511b2bec6e1",
        measurementId: "G-E318DZCVF8"
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