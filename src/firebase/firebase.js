import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDiV0l7-35u--Quoh7bYX-lL-bq4oe7tR4",
	authDomain: "netflix-clone-d89b5.firebaseapp.com",
	projectId: "netflix-clone-d89b5",
	storageBucket: "netflix-clone-d89b5.appspot.com",
	messagingSenderId: "1042813830286",
	appId: "1:1042813830286:web:20490c2970cbc984af35df",
	measurementId: "G-PN65B1CF0G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
