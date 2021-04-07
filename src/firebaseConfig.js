import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
  
const firebaseConfig = {
    apiKey: "AIzaSyCfY2lk51bSurEQ22kjPnffyReWq-mYTZk",
    authDomain: "video-conff.firebaseapp.com",
    projectId: "video-conff",
    storageBucket: "video-conff.appspot.com",
    messagingSenderId: "939047971287",
    appId: "1:939047971287:web:86c6f71ec6b236ceb54392",
    measurementId: "G-R9SF1S9K24"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };

export default firebase;