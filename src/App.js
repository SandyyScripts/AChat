import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Chats from "./Chats";
import db from "./firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";

function App() {
	const [chats, setChats] = useState([]);
	const [input, setInput] = useState("");
	// When the app loads,we need to listen to the database and fetch new chats as they get added / removed
	useEffect(() => {
		// this code here ... fires when the app.js loads
		db.collection("chats")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setChats(
					snapshot.docs.map((doc) => ({ id: doc.id, chat: doc.data().chat }))
				);
			});
	}, []);
	function addChats(e) {
		e.preventDefault(); //Prevents Refreshing
		db.collection("chats").add({
			chat: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	}
	return (
		<div className="App">
			<h1>Anonymous Chats 👨‍💻</h1>
			<form>
				<FormControl>
					<InputLabel>Type a message ✏️</InputLabel>
					<Input
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
				</FormControl>
				<Button
					disabled={!input}
					type="submit"
					onClick={addChats}
					variant="outlined"
					color="primary"
				>
					<SendIcon />
				</Button>
			</form>

			<ul>
				{chats.map((items) => (
					<Chats items={items} />
				))}
			</ul>
		</div>
	);
}

export default App;
