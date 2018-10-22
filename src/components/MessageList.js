import React, { Component } from 'react';
import Message from './Message';


class MessageList extends Component {

	state = {
			messageData: [],
		}

	componentDidMount() {

		fetch('http://localhost:8082/api/messages')
		.then(res => res.json())
		.then(data => {
			// console.log(data)
			this.setState({ messageData: data })
			// console.log("inside fetch", this.state.messageData)
		})
}


  render() {

    return (

      <div>

      
     		<Message messageData={this.state.messageData} read={this.state.read} unread={this.state.unread} />
     		
 				
      </div>

    );
  }
}

export default MessageList;
