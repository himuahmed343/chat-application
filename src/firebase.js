import firebase from 'firebase/app'
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA0zJ3X_rAUg7nQG-VwgnT4JZ89rBtTIb8",
    authDomain: "chat-app-2f3d6.firebaseapp.com",
    projectId: "chat-app-2f3d6",
    storageBucket: "chat-app-2f3d6.appspot.com",
    messagingSenderId: "433408476017",
    appId: "1:433408476017:web:a9e0a3debf4e257643ecd0"
      
}).auth();


