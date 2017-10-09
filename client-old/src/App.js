import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrackList from './Tracks/components/TrackList'

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="col-12">
          <TrackList />
        </div>

        <div className="currentlyPlaying">

        </div>
      </div>
    );
  }
}

export default App;
