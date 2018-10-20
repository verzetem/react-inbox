import React from 'react';


const Message = ({ messageData }) => {

  return (

    <div>
			
			{ messageData.map((message) => 
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
			  <div className="col-xs-11">
			    <a href="#">
			      <p id={message.id} labels={message.labels} starred={message.starred} read={message.read}>{message.subject}</p>
			    </a>
			  </div>
			</div>
	      )}

    </div>

  );
  
}

export default Message;
