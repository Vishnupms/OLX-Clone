import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCc0dXoX8TmpA9nR4QDaCzYREcaczrY2z0",

    authDomain: "olx-app-f6cdf.firebaseapp.com",

    projectId: "olx-app-f6cdf",

    storageBucket: "olx-app-f6cdf.appspot.com",

    messagingSenderId: "657958002206",

    appId: "1:657958002206:web:8e287b33464b727c58d80f",

    measurementId: "G-7TRBN3DVKE",
};

export default firebase.initializeApp(firebaseConfig)
