import React, { Component } from 'react'
import ToolBar from './components/ToolBar'
import MessageList from './components/MessageList'
import './App.css'


class App extends Component {
// deployed heroku app UPDATE FIRST BEFORE USING:
// https://whispering-wildwood-25412.herokuapp.com/api/messages

state = {
		messageData: [],

	}

componentDidMount() {
	fetch("http://localhost:8082/api/messages")
	.then(res => res.json())
	.then(data => {
		// console.log(data)
		this.setState({ messageData: data })
		console.log("inside fetch", this.state)
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
 }

 toolbarEnable = () => {
 	console.log("toolbar enabled")
 }



  render() {

    return (

      <div className="col-md-12 mr">
          
            
            <ToolBar unreadCounter={this.unreadCounter} />
            {/*<NewMessage />*/}
            <MessageList 
            messageData={this.state.messageData} 
            starToggle={this.starToggle} 
            setMsgRead={this.setMsgRead}
            checkedToggle={this.checkedToggle}
            toolbarEnable={this.toolbarEnable} />

      </div>

    );
  }
}

export default App
