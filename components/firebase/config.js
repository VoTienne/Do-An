import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

 
const firebaseConfig = {
    apiKey: "AIzaSyBzp9emhYAqXvSTCH1Y0JZb28qDKesCpUs",
    authDomain: "doan-99ce2.firebaseapp.com",
    projectId: "doan-99ce2",
    storageBucket: "doan-99ce2.appspot.com",
    messagingSenderId: "554186919701",
    appId: "1:554186919701:web:96688bcc4de251abdd631c",
    measurementId: "G-4YRY9XV202"

}
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};