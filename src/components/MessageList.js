import React, { Component } from 'react';
import Message from './Message';


class MessageList extends Component {

	state = {
			messageData: [],
			isToggled: true
		}

	componentDidMount() {

		fetch('http://localhost:8082/api/messages')
		.then(req => req.json())
		.then(data => {
			// console.log(data)
			this.setState({ messageData: data })
			// console.log("inside fetch", this.state.messageData)
		})
}

		handleClick() {
		this.setState(function(prevState) {
			return {
				isToggled: !prevState.isToggled
			};
		});
	}

  render() {

    return (

      <div>
     		<Message messageData={this.state.messageData} />
     		<button onClick={this.handleClick} className="btn btn-default"> {this.state.isToggleOn ? 'ON' : 'OFF'} </button>
     		
 				
      </div>

    );
  }
}

export default MessageList;
