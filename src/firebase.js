import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAC7Zxwfs9UwSwLJMheo1-kKthIJ9EO9qQ",
	authDomain: "achat-e9841.firebaseapp.com",
	projectId: "achat-e9841",
	storageBucket: "achat-e9841.appspot.com",
	messagingSenderId: "1047532411433",
	appId: "1:1047532411433:web:74ec42c4c8cde74676da38",
	measurementId: "G-VHN0P8DHE3",
});

const db = firebaseApp.firestore();

export default db;
