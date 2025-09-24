import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOks7c0yXV-7onH1Nep-DZvzyUsCNJ_Hc",
  authDomain: "my-pets-7ef4f.firebaseapp.com",
  projectId: "my-pets-7ef4f",
  storageBucket: "my-pets-7ef4f.firebasestorage.app",
  messagingSenderId: "8283016911",
  appId: "1:8283016911:web:2de29a812e3d916d8231ba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);