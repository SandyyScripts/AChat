import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";
import {
	ListItem,
	List,
	ListItemAvatar,
	ListItemText,
} from "@material-ui/core";

function Chats(props) {
	return (
		<List className="todo_list">
			<ListItem>
				<ListItemAvatar></ListItemAvatar>
				<ListItemText primary={props.items.chat} secondary="Sent" />
			</ListItem>
			<DeleteForeverIcon
				onClick={(event) => db.collection("chats").doc(props.items.id).delete()}
			>
				Delete Me
			</DeleteForeverIcon>
		</List>
	);
}

export default Chats;
