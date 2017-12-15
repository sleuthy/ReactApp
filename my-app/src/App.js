import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput, {createFilter} from 'react-search-input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cocktail Rescue!</h1>
        </header>
        <h2> Search for Recipes:</h2>
        <SearchInput className="search-input" />
          {/* return ( */}
            {/* <div className="recipeTitle" key={title.id}>
              <div className="recipePic" key={pic.id}>
            </div>
            </div> */}
          {/* )  */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Or don't. No one can tell anyone else what to do. You have to do what's right for you.
        </p>
      </div>
    );
  }
}

export default App;
