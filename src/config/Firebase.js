import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAVNrle6uPrniYPdwpfUFLFJ6IaOnXhY2A",
    authDomain: "instagram-clone-d2620.firebaseapp.com",
    databaseURL: "https://instagram-clone-d2620.firebaseio.com",
    projectId: "instagram-clone-d2620",
    storageBucket: "instagram-clone-d2620.appspot.com",
    messagingSenderId: "576788378688",
    appId: "1:576788378688:web:b9c6b5cb74386dc0ea9ba5",
    measurementId: "G-9P8ESQC2B9"
};
  
var Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;