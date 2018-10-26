import React from 'react'

const Message = ({ setMsgRead, key, id, selected, read, starred, subject, checkedToggle, starToggle, messageData, toolbarEnable }) => {
	const isRead = read ? "row message read" : "row message unread"
	const isStarred = starred ? "star fa fa-star" : "star fa fa-star-o"
	const isSelected = selected ? " selected" : ""


return (

  <div>

		<div className={ isRead + isSelected } >
		  <div className="col-xs-1">
		    <div className="row">
		      <div className="col-xs-2">
		        <input onClick={ (e) => checkedToggle(id, e) } type="checkbox"/>
		      </div>
		      <div className="col-xs-2">
		        <i onClick={ () => starToggle(id) } className={isStarred}></i>
		      </div>
		    </div>
		  </div>
		  <div onClick={ () => setMsgRead(id) } className="col-xs-11">
		    <a href="#">
		      <p>{subject}</p>
		    </a>
		  </div>
		</div>

  </div>

)
 
}

export default Message
