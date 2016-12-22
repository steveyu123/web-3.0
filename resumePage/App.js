import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Steve's site</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className ="App-userContent">
            <h2> content</h2>
        </div>
        <body>

          <h2> 
              Projects
          </h2>

        </body>
      </div>

    );
  }
}

export default App;
