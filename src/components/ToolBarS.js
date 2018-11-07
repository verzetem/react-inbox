import React from 'react';


const ToolBarS = ({ unreadCounter, markRead, markUnread, deleteMsg, unChecked }) => {

	return (

<div>
  <div className='header'>
    <h1>React Inbox</h1>
  </div>

  <div className='row toolbar'>
    <div className='col-md-12'>
      <p className='pull-right'>
        <span className='badge btn-info'>{unreadCounter()}</span>
        unread messages
      </p>

    <a role='button' data-toggle='collapse' href='#collapseExample' aria-expanded='false' aria-controls='collapseExample' className='btn btn-danger'>
      <i className='fa fa-plus'></i>
    </a>

    <button onClick={ (id) => unChecked(id) } className='btn btn-default'>
      <i className='far fa-minus-square'></i>
    </button>

    <button onClick={ () => markRead() } className='btn btn-default'>
      Mark As Read
    </button>

    <button onClick={ () => markUnread() } className='btn btn-default'>
      Mark As Unread
    </button>

    <select className='form-control label-select'>
      <option>Apply label</option>
      <option value='dev'>dev</option>
      <option value='personal'>personal</option>
      <option value='gschool'>gschool</option>
    </select>

    <select className='form-control label-select'>
      <option>Remove label</option>
      <option value='dev'>dev</option>
      <option value='personal'>personal</option>
      <option value='gschool'>gschool</option>
    </select>

    <button onClick={ () => deleteMsg() } className='btn btn-default'>
      <i className='fas fa-trash-alt'></i>
    </button>
    </div>
  </div>
</div>
  )
}
export default ToolBarS;