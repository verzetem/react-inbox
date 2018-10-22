import React, { Component } from 'react';

class Message extends Component {

	msgReadToggle(e) {
		console.log("message clicked", e.persist(), e)
		// (e.target.attributes.isRead.value !== "true") ? e.target.classList. : console.log("true, do nothing")
		// (message.read !== true) ? e.target.classList
 }
 starToggle(e) {
 	// (e.target.attributes.isread !== "true" ? e`.target.classList.remove("fa-star-o") && e.target.classList.add("fa-star") : e.target.classList.remove("fa-star") && e.target.classList.add( "fa-star-o"))
 	// console.log("star toggle", e.target.classList)
 	// "star fa fa-star-o"
 	// "star fa fa-star"
	
 }

 strd(e) {
 	
 }

render() {
  return (

    <div>

	


			{ console.log("messageData", this.props.messageData) }
			{ this.props.messageData.map((message) => 
				(message.read !== true) ? 
					<div onClick={this.msgReadToggle} isread={message.read.toString()} className="row message unread">
					  <div className="col-xs-1">
					    <div className="row">
					      <div className="col-xs-2">
					        <input type="checkbox" />
					      </div>
					      <div className="col-xs-2">
					        <i className={(message.starred !== true) ? "star fa fa-star-o" : "star fa fa-star" }></i>
					      </div>
					    </div>
					  </div>
					  <div className="col-xs-10">
					    <a href="#">
					      <p id={message.id} labels={message.labels} starred={message.starred.toString()}>{message.subject}</p>
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
					      <p onClick={this.handleClick} id={message.id} labels={message.labels} starred={message.starred.toString()} isread={message.read.toString()}>{message.subject}</p>
					    </a>
					  </div>
					</div>
	      )}
				
    </div>

  );
 }
}

export default Message;
