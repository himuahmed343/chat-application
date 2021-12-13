// import 'firebase/app'
import 'firebase/auth';


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0zJ3X_rAUg7nQG-VwgnT4JZ89rBtTIb8",
    authDomain: "chat-app-2f3d6.firebaseapp.com",
    projectId: "chat-app-2f3d6",
    storageBucket: "chat-app-2f3d6.appspot.com",
    messagingSenderId: "433408476017",
    appId: "1:433408476017:web:a9e0a3debf4e257643ecd0"
      
}
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app




