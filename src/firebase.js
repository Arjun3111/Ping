import firebase from "firebase" ;
import 'firebase/auth' ;

const firebaseConfig = {
    apiKey: "AIzaSyCWPRUca2uCSzNDhOLAhMZ3TUE3qi2dnGU",
    authDomain: "ping-682e2.firebaseapp.com",
    projectId: "ping-682e2",
    storageBucket: "ping-682e2.appspot.com",
    messagingSenderId: "620432447354",
    appId: "1:620432447354:web:43b8c33332c77b4a3fa8c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ; 

export default firebaseApp ;