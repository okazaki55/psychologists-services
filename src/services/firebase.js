import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcDSp20a54mh6e5Wub3cpzRExvl06tYcI",
  authDomain: "psychologists-services-7d2d3.firebaseapp.com",
  databaseURL:
    "https://psychologists-services-7d2d3-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "psychologists-services-7d2d3",
  storageBucket: "psychologists-services-7d2d3.firebasestorage.app",
  messagingSenderId: "580946712562",
  appId: "1:580946712562:web:f443fded87170c8c487d6b",
  measurementId: "G-S7KY4LJMXF",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
