import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Tracks/containers/Player'
import TrackList from './Tracks/containers/TrackList'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="col-12">
          <TrackList />
        </div>

        <div className="currentlyPlaying">
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
