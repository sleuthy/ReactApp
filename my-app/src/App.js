import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Kathy and Jackie's React App</h1>
        </header>
        <h2> We don't know what we're doing! </h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Or don't. No one can tell anyone else what to do. You have to do what's right for you.
        </p>
      </div>
    );
  }
}

export default App;
