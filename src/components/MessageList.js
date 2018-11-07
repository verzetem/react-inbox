import React from 'react';
import Message from './Message';
import Compose from './Compose';

const MessageList = ({ messageData, starToggle, setMsgRead, checkedToggle, subjectListen, bodyListen, onSend, subject, body, stateBody }) => {

const msgComponents = messageData.map(message => {

	return <Message
		     		setMsgRead={setMsgRead}
		     		key={message.id}
		     		id={message.id}
		     		selected={message.selected}
		     		read={message.read}
		     		starred={message.starred}
		     		subject={message.subject}
		     		checkedToggle={checkedToggle}
		     		starToggle={starToggle}
		     		onSend={onSend}
		     		body={message.body}
		     		labels={message.labels} />
})
		
  return (
    <div>
    	<Compose 
    		subjectListen={subjectListen}
    		bodyListen={bodyListen}
    		onSend={onSend}
    		subject={subject}
    		body={body} />
    	{ msgComponents }
    </div>
  )
}

export default MessageList;