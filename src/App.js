import React, { Component } from "react";
import ToolBarNS from "./components/ToolBarNS";
import ToolBarS from "./components/ToolBarS";
import MessageList from "./components/MessageList";
import "./App.css";

class App extends Component {
	state = {
		messageData: [],
		checkedNum: 0,
		msgCompose: {
			body: "",
			id: "",
			labels: [],
			read: false,
			selected: false,
			starred: false,
			subject: ""
		}
	};

	componentDidMount() {
		fetch("http://localhost:8082/api/messages")
			.then(res => res.json())
			.then(data => {
				this.setState({ messageData: data });
				data.map(data => {
					return data.selected !== false
						? this.setState({ checkedNum: this.state.checkedNum + 1 })
						: this.setState({ checkedNum: 0 });
				});
			});
	}

	// TOOLBAR METHODS ///////////////
	deleteMsg = () => {
		const msgIds = this.getSelectedMsgs();
		fetch("http://localhost:8082/api/messages", {
			headers: {
				"Content-Type": "application/json"
			},
			method: "PATCH",
			body: JSON.stringify({
				messageIds: msgIds,
				command: "delete"
			})
		})
			.then(res => res.json())
			.then(newMessages => {
				this.setState({
					messageData: newMessages
				});
			});
	};

	getSelectedMsgs = () => {
		const msgData = this.state.messageData;
		const selectedMsgs = msgData
			.filter(message => {
				if (message.selected === true) {
					return true;
				} else {
					return false;
				}
			})
			.map(message => {
				return message.id;
			});
		return selectedMsgs;
	};

	markRead = e => {
		const msgIds = this.getSelectedMsgs();
		fetch("http://localhost:8082/api/messages", {
			headers: {
				"Content-Type": "application/json"
			},
			method: "PATCH",
			body: JSON.stringify({
				messageIds: msgIds,
				command: "read",
				read: true
			})
		})
			.then(res => res.json())
			.then(newMessages => {
				this.setState({
					messageData: newMessages
				});
			});
	};

	markUnread = () => {
		const msgIds = this.getSelectedMsgs();
		fetch("http://localhost:8082/api/messages", {
			headers: {
				"Content-Type": "application/json"
			},
			method: "PATCH",
			body: JSON.stringify({
				messageIds: msgIds,
				command: "read",
				read: false
			})
		})
			.then(res => res.json())
			.then(newMessages => {
				this.setState({
					messageData: newMessages
				});
			});
	};

	unreadCounter = () => {
		const msgData = this.state.messageData;
		const counter = msgData.filter(message => {
			return !message.read;
		}).length;
		return counter;
	};

	// MESSAGELIST METHODS ///////////////
	setMsgRead = id => {
		fetch("http://localhost:8082/api/messages", {
			headers: {
				"Content-Type": "application/json"
			},
			method: "PATCH",
			body: JSON.stringify({
				messageIds: [id],
				command: "read",
				read: true
			})
		})
			.then(res => res.json())
			.then(newMessages => {
				this.setState({
					messageData: newMessages
				});
			});
	};

	starToggle = messageId => {
		fetch("http://localhost:8082/api/messages", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				messageIds: [messageId],
				command: "star"
			})
		})
			.then(res => res.json())
			.then(newMessages => {
				this.setState({
					messageData: newMessages
				});
			});
	};

	checkedToggle = (messageId, e) => {
		fetch("http://localhost:8082/api/messages", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				messageIds: [messageId],
				command: "selected"
			})
		})
			.then(res => res.json())
			.then(newMessages => {
				this.setState({
					messageData: newMessages
				});
			});
		this.isChecked(e);
	};

	isChecked = e => {
		let checkedNum = this.state.checkedNum;
		const msgData = this.state.messageData;
		// e.target.checked
		for (let i = 0; 0 < msgData.length; i++) {
			if (e.target.checked === true) {
				return this.setState({ checkedNum: checkedNum + 1 });
			} else {
				return this.setState({ checkedNum: checkedNum - 1 });
			}
		}
	};

	// COMPOSE MSG METHODS ///////////////
	resetForm = () => {
		this.setState({
			msgCompose: {
				body: "",
				id: "",
				labels: [],
				read: false,
				selected: false,
				starred: false,
				subject: ""
			}
		});
	};

	bodyListen = e => {
		let body = e.target.value;
		this.setState({
			msgCompose: {
				...this.state.msgCompose,
				body: body
			}
		});
	};

	subjectListen = e => {
		let subject = e.target.value;
		this.setState({
			msgCompose: {
				...this.state.msgCompose,
				subject: subject
			}
		});
	};

	onSend = e => {
		const msgData = this.state.messageData;
		const msgCompose = this.state.msgCompose;
		// let newMsg = [ { body: msgCompose.body, id: msgData.length+1, labels: [], read: false, selected: false, starred: false, subject: msgCompose.subject } ]
		// this.setState({ messageData: msgData.concat(newMsg) })

		e.preventDefault();
		fetch("http://localhost:8082/api/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				body: msgCompose.body,
				id: msgData.length + 1,
				labels: [],
				read: false,
				selected: false,
				starred: false,
				subject: msgCompose.subject
			})
		})
			.then(res => res.json())
			.then(newMessages => {
				this.setState({
					messageData: msgData.concat(newMessages)
				});
			});
		this.resetForm();
	};

	render() {
		if (this.state.checkedNum === 0) {
			return (
				<div className="col-md-12 mr">
					<ToolBarNS unreadCounter={this.unreadCounter} />
					<MessageList
						messageData={this.state.messageData}
						starToggle={this.starToggle}
						setMsgRead={this.setMsgRead}
						checkedToggle={this.checkedToggle}
						subjectListen={this.subjectListen}
						bodyListen={this.bodyListen}
						onSend={this.onSend}
						subject={this.state.msgCompose.subject}
						body={this.state.msgCompose.body}
						stateBody={this.state.messageData.body}
					/>
				</div>
			);
		} else {
			return (
				<div className="col-md-12 mr">
					<ToolBarS
						unreadCounter={this.unreadCounter}
						markRead={this.markRead}
						markUnread={this.markUnread}
						deleteMsg={this.deleteMsg}
					/>
					<MessageList
						messageData={this.state.messageData}
						starToggle={this.starToggle}
						setMsgRead={this.setMsgRead}
						checkedToggle={this.checkedToggle}
					/>
				</div>
			);
		}
	}
}
export default App;
