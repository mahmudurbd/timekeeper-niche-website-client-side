import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.congfig";

const firebaseInitialization = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;