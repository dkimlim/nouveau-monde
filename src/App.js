import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> New Earth's Information Hub</h1>
        </header>
        <p className="App-intro">
          An informed citizen is a good citizen
        </p>
      </div>
    );
  }
}

export default App;
