import React, { Component } from 'react';
import './App.scss';
import Notification from './components/notification/Notification';
import BoarderHighlight from './components/boarderHighlight/BoarderHighlight';

class App extends Component {
  constructor(props){
    super(props);

    this.notification = React.createRef();
  }

  showNotification = (e) => {
    e.preventDefault();

    this.notification.current.show();
  }

  render() {
    return (
      <div>        
        <header className="App-header">
          <BoarderHighlight ref={this.notification} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>       
          <button onClick={this.showNotification}>show</button>   
        </header>        
      </div>
    );
  }
}

export default App;
