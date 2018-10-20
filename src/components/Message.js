import React, { Component } from 'react';

class Message extends Component {

	handleClick(e) {
		console.log("message clicked", e.persist(), e)
		// (e.target.attributes.isRead.value !== "true") ? e.target.classList. : console.log("true, do nothing")
 }

render() {
  return (

    <div>

			{console.log("messageData", this.props.messageData)}
			{ this.props.messageData.map((message) => 
				(message.read !== true) ? 
					<div className="row message unread">
			  <div className="col-xs-1">
			    <div className="row">
			      <div className="col-xs-2">
			        <input type="checkbox" />
			      </div>
			      <div className="col-xs-2">
			        <i className="star fa fa-star-o"></i>
			      </div>
			    </div>
			  </div>
			  <div className="col-xs-10">
			    <a href="#">
			      <p onClick={this.handleClick} id={message.id} labels={message.labels} starred={message.starred.toString()} isRead={message.read.toString()}>{message.subject}</p>
			    </a>
			  </div>
			</div>
			:
					<div className="row message read">
			  <div className="col-xs-1">
			    <div className="row">
			      <div className="col-xs-2">
			        <input type="checkbox" />
			      </div>
			      <div className="col-xs-2">
			        <i className="star fa fa-star-o"></i>
			      </div>
			    </div>
			  </div>
			  <div className="col-xs-10">
			    <a href="#">
			      <p onClick={this.handleClick} id={message.id} labels={message.labels} starred={message.starred.toString()} isRead={message.read.toString()}>{message.subject}</p>
			    </a>
			  </div>
			</div>
	      )}

    </div>

  );
 }
}

export default Message;
