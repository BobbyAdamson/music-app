import React, { Component } from 'react'
import Player from './player'

class Track extends Component {
  render() {
    return (
      <div className="trackFile container-fluid">
        <div className="row">
          <div className="col-4">
            <h3>{this.props.title}</h3>
            <p>Uploaded by: Bobby</p>
            <p>Date uploaded: Oct 5, 2017</p>
          </div>
          <div className="col-8">
            <Player track={this.props.track}  />
          </div>
          </div>
      </div>
    )
  }
}

export default Track