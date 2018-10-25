import React, { Component } from 'react'
import ToolBar from './components/ToolBar'
import MessageList from './components/MessageList'
import './App.css'


class App extends Component {


	state = {
			messageData: [],
			unreadCount: "",
		}

	componentDidMount() {

		fetch("https://whispering-wildwood-25412.herokuapp.com/api/messages")
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			this.setState({ messageData: data })
			console.log("inside fetch", this.state)
		})
}

unreadCounter = (messages) => {
	const counter = messages.filter(message => {
		return !message.read
	}).length
	return counter
}

onSubmit(e){
	e.preventDefault()
	console.log(this.props.messageData)
}

	msgReadToggle = (e, id) => {
		// console.log("msg read toggle", id)
		let messages = this.state.messageData
		let newMessages = messages.map((message) => {
			if (message.id === id) message.read = !message.read 
			return message
	})
		this.setState({messageData: newMessages})
 } 

 	starToggle = (e) => {
		console.log("star toggle")
 }



  render() {

    return (

      <div className="col-md-12 mr">
          
            
            <ToolBar unreadCounter={this.unreadCounter} />
            {/*<NewMessage />*/}
            <MessageList 
            messageData={this.state.messageData} 
            starToggle={this.starToggle} 
            msgReadToggle={this.msgReadToggle}
            checkedToggle={this.checkedToggle} />


 
      </div>

    );
  }
}

export default App
