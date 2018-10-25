import React from 'react'
import Message from './Message'


const MessageList = ({ messageData, starToggle, msgReadToggle, checkedToggle }) => {
	
	const msgComponents = messageData.map(message => {
  	return <Message 
		     		msgReadToggle={msgReadToggle}
		     		key={message.id}
		     		id={message.id}
		     		selected={message.selected}
		     		read={message.read}
		     		starred={message.starred}
		     		subject={message.subject}
		     		checkedToggle={checkedToggle}
		     		starToggle={starToggle} />
})



		
    return (

      <div>

      { msgComponents }
     		
 				
      </div>

    );
  
}

export default MessageList