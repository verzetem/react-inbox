import React from 'react';

const ToolBar = () => {

	return (

		<div>
			<div className="header">
		  	<h1>React Inbox</h1>
	  	</div>

			<div className="row toolbar">
			  <div className="col-md-12">
			    <p className="pull-right">
			      <span className="badge badge">2</span>
			      unread messages
			    </p>

			    <button className="btn btn-default">
			      <i className="fa fa-check-square-o"></i>
			    </button>

			    <button className="btn btn-default">
			      Mark As Read
			    </button>

			    <button className="btn btn-default">
			      Mark As Unread
			    </button>

			    <select className="form-control label-select">
			      <option>Apply label</option>
			      <option value="dev">dev</option>
			      <option value="personal">personal</option>
			      <option value="gschool">gschool</option>
			    </select>

			    <select className="form-control label-select">
			      <option>Remove label</option>
			      <option value="dev">dev</option>
			      <option value="personal">personal</option>
			      <option value="gschool">gschool</option>
			    </select>

			    <button data-toggle="tooltip" className="btn btn-default">
			      <i data-placement="left" title="Tooltip on left" className="fa fa-trash-o"></i>
			    </button>


			  </div>
			</div>





  	</div>

  )
}
export default ToolBar;
