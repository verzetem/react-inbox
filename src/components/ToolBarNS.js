import React from 'react';

const ToolBar = ({ unreadCounter, toolbarEnable }) => {

  // const enabled = toobarEnable ? 
  // const isSelected = selected ? " selected" : ""

	return (

		<div>
			<div className="header">
		  	<h1>React Inbox</h1>
	  	</div>

			<div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge btn-info">{unreadCounter()}</span>
      unread messages
    </p>

    <button className="btn btn-default">
      <i className="fa fa-square-o"></i>
    </button>

    <button className="btn btn-default" disabled="disabled">
      Mark As Read
    </button>

    <button className="btn btn-default" disabled="disabled">
      Mark As Unread
    </button>

    <select className="form-control label-select" disabled="disabled">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" disabled="disabled">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" disabled="disabled">
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>





  	</div>

  )
}
export default ToolBar