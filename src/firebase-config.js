import { initializeApp } from "firebase/app";
import { getFirestore, collection  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoXQPiQ3zGw41xx8rb8DfU_VArNDYmGIw",
  authDomain: "clients-91082.firebaseapp.com",
  projectId: "clients-91082",
  storageBucket: "clients-91082.appspot.com",
  messagingSenderId: "338027419585",
  appId: "1:338027419585:web:87b207cd0609153b9bc140",
  measurementId: "G-BK1011BGFY"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const userCollectionRef = collection(db, 'clients')

