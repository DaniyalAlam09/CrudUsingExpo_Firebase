
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7i5vQAAa2lLqkZx2JTZDXeuCN8DBTlrk",
  authDomain: "firestore-41dc3.firebaseapp.com",
  projectId: "firestore-41dc3",
  storageBucket: "firestore-41dc3.appspot.com",
  messagingSenderId: "510347841353",
  appId: "1:510347841353:web:8e3aeb404a713016979498"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);