import React, { Component } from 'react';
import ToolBar from './components/ToolBar';
import MessageList from './components/MessageList';
import './App.css';


class App extends Component {

  render() {

    return (

      <div className="col-md-12">
          
            
            <ToolBar />
            <MessageList />


 
      </div>

    );
  }
}

export default App;
