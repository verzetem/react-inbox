import React from 'react';

const ToolBarNS = ({ unreadCounter }) => {
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

          <a
            role='button'
            data-toggle='collapse'
            href='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
            className='btn btn-danger'
          >
            <i className='fa fa-plus' />
          </a>

          <button className='btn btn-default'>
            <i className='far fa-square' />
          </button>

          <button className='btn btn-default' disabled='disabled'>
            Mark As Read
          </button>

          <button className='btn btn-default' disabled='disabled'>
            Mark As Unread
          </button>

          <select className='form-control label-select' disabled='disabled'>
            <option>Apply label</option>
            <option value='dev'>dev</option>
            <option value='personal'>personal</option>
            <option value='gschool'>gschool</option>
          </select>

          <select className='form-control label-select' disabled='disabled'>
            <option>Remove label</option>
            <option value='dev'>dev</option>
            <option value='personal'>personal</option>
            <option value='gschool'>gschool</option>
          </select>

          <button className='btn btn-default' disabled='disabled'>
            <i className='fas fa-trash-alt' />
          </button>
        </div>
      </div>

      <div
        className='modal fade'
        id='myModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myModalLabel'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form className='form-horizontal well'>
                <div className='form-group'>
                  <div className='col-sm-8 col-sm-offset-2'>
                    <h4>Compose Message</h4>
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='subject' className='col-sm-2 control-label'>
                    Subject
                  </label>
                  <div className='col-sm-8'>
                    <input
                      type='text'
                      className='form-control'
                      id='subject'
                      placeholder='Enter a subject'
                      name='subject'
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='body' className='col-sm-2 control-label'>
                    Body
                  </label>
                  <div className='col-sm-8'>
                    <textarea name='body' id='body' className='form-control' />
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-sm-8 col-sm-offset-2' />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-default'
                data-dismiss='modal'
              >
                Close
              </button>
              <input type='submit' value='Send' className='btn btn-primary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToolBarNS;
