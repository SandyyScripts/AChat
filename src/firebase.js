import firebase from "firebase";
require("dotenv").config();

const firebaseApp = firebase.initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: "achat-e9841.firebaseapp.com",
	projectId: "achat-e9841",
	storageBucket: "achat-e9841.appspot.com",
	messagingSenderId: "1047532411433",
	appId: "1:1047532411433:web:74ec42c4c8cde74676da38",
	measurementId: "G-VHN0P8DHE3",
});

const db = firebaseApp.firestore();

export default db;
