import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBffWG0lyHU2ijW8f3A2JCJIuvJepdfO00",
    authDomain: "whatsapp-clone-70444.firebaseapp.com",
    projectId: "whatsapp-clone-70444",
    storageBucket: "whatsapp-clone-70444.appspot.com",
    messagingSenderId: "169962653309",
    appId: "1:169962653309:web:8d76587ee912aa0a425314",
    measurementId: "G-M9H619ZL63"
  };

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)