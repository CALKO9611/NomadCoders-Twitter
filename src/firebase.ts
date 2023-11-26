import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQk_Hs8dU6fHfqXBEdpzGrb4j-66YJNjc",
  authDomain: "nomadcoders-twiiter.firebaseapp.com",
  projectId: "nomadcoders-twiiter",
  storageBucket: "nomadcoders-twiiter.appspot.com",
  messagingSenderId: "939615256380",
  appId: "1:939615256380:web:4840b6d2ff56ecd3686839",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
