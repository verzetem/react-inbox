import React from 'react';

const Compose = ({ subjectListen, bodyListen, onSend, subject, body }) => {

  return (
    <div>
			<div className='collapse' id='collapseExample'>
					<form className='form-horizontal well'>
					  <div className='form-group'>
					    <div className='col-sm-8 col-sm-offset-2'>
					      <h4>Compose Message</h4>
					    </div>
					  </div>
					  <div className='form-group'>
					    <label htmlFor='subject' className='col-sm-2 control-label'>Subject</label>
					    <div className='col-sm-8'>
					      <input onChange={ (e) => subjectListen(e) } type='text' className='form-control' id='subject' placeholder='Enter a subject' name='subject' value={subject}/>
					    </div>
					  </div>
					  <div className='form-group'>
					    <label htmlFor='body' className='col-sm-2 control-label'>Body</label>
					    <div className='col-sm-8'>
					      <textarea onChange={ (e) => bodyListen(e) } type='text' className='form-control' id='body' placeholder='Enter body text' name='body' value={body} />
					    </div>
					  </div>
					  <div className='form-group'>
					    <div className='col-sm-8 col-sm-offset-2'>
					      <button onClick={ (e) => onSend(e) } className='btn btn-info' data-toggle='collapse' href='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>Send</button>
					    </div>
					  </div>
					</form>
			</div>
    </div>
  );
}

export default Compose;
