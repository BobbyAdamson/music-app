import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player'
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="col-12">
          <List />
        </div>

        <div className="currentlyPlaying">
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
