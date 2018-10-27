import React, { Component } from 'react'
import ToolBarNS from './components/ToolBarNS'
import ToolBarS from './components/ToolBarS'
import MessageList from './components/MessageList'
import './App.css'


class App extends Component {
// deployed heroku app UPDATE FIRST BEFORE USING:
// https://whispering-wildwood-25412.herokuapp.com/api/messages

state = {
		messageData: [],
		checkedNum: 0,
		tbEnabled: null
	}

componentDidMount() {
	fetch("http://localhost:8082/api/messages")
	.then(res => res.json())
	.then(data => {
		this.setState({ messageData: data });
		data.map(data  => {
			console.log("inside mounted, data", data.selected);

			(data.selected !== false) ? this.setState({ checkedNum: this.state.checkedNum+1 }) : this.setState({ checkedNum: 0 });
		})
		console.log("inside fetch", this.state);
	})
}

unreadCounter = () => {
	const msgData = this.state.messageData
	const counter = msgData.filter(message => {
		return !message.read
	}).length
	return counter
}

setMsgRead = (id) => {
	fetch("http://localhost:8082/api/messages", {
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  method: 'PATCH',                                                              
	  body: JSON.stringify({ 
	  	"messageIds": [id],
	  	"command": "read",
	  	"read": true
	  })                                        
	})
		.then(res => res.json())
		.then(newMessages => {
			this.setState({
				messageData: newMessages
			})
		})
 } 
  
starToggle = (messageId) => {
	fetch("http://localhost:8082/api/messages", {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			"messageIds": [messageId],
			"command": "star"
		})
	})
		.then(res => res.json())
		.then(newMessages => {
			this.setState({
				messageData: newMessages
			})
		})
 }

checkedToggle = (messageId, e) => {
// function save(){
//     var checkbox = document.getElementById('checkbox1zaal1');
//     localStorage.setItem('checkbox1zaal1', checkbox.checked);
// }

// function load(){    
//     var checked = JSON.parse(localStorage.getItem('checkbox1zaal1'));
//     document.getElementById("checkbox1zaal1").checked = checked;
// }

// function wis(){
//     location.reload();
//     localStorage.clear()
// } 
// let checkbox = e.target
// (checkbox.checked == false) ? localStorage.setItem('checkbox', checkbox.checked) : localStorage.clear();
console.log("checkedToggle", e.persist(), e.target.checked);
fetch("http://localhost:8082/api/messages", {
	method: "PATCH",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify({
		"messageIds": [messageId],
		"command": "selected"
	})
})
	.then(res => res.json())
	.then(newMessages => {
		this.setState({
			messageData: newMessages
		})
	})
	 this.isChecked(e);
}

isChecked = (e) => {
	let checkedNum = this.state.checkedNum
	const msgData = this.state.messageData
	for (let i = 0; 0 < msgData.length; i++) {
		if (e.target.checked === true) {
			return this.setState({ checkedNum: checkedNum+1 })
		} else {
			return this.setState({ checkedNum: checkedNum-1 })
		}
	}
}

  render() {
  	if (this.state.checkedNum === 0) {
  		return (
  			<div className="col-md-12 mr">
					<ToolBarNS unreadCounter={this.unreadCounter} />
					<MessageList 
	          messageData={this.state.messageData} 
	          starToggle={this.starToggle} 
	          setMsgRead={this.setMsgRead}
	          checkedToggle={this.checkedToggle} />
	          <h3>{this.state.checkedNum}</h3>
        </div>
  			)
  	} else {
  		return (
				<div className="col-md-12 mr">
					<ToolBarS unreadCounter={this.unreadCounter} toolbarEnable={this.toolbarEnable} />
					<MessageList 
	          messageData={this.state.messageData} 
	          starToggle={this.starToggle} 
	          setMsgRead={this.setMsgRead}
	          checkedToggle={this.checkedToggle} />
	          <h3>{this.state.checkedNum}</h3>
        </div>
  			)
  	}
  }
}

export default App
