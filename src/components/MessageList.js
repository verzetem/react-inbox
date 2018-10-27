import React from 'react'
import Message from './Message'


const MessageList = ({ messageData, starToggle, setMsgRead, checkedToggle }) => {

const msgComponents = messageData.map(message => {

	return <Message
					messageData={messageData} 
	     		setMsgRead={setMsgRead}
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
  )
}

export default MessageList