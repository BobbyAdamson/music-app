import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Track from './Track'

class TrackList extends Component {
  createTrackList() {
    return this.props.tracks.map((track) => {
      return (
        <Track key={track.id} track={track} />
      )
    })
  }

  render() {
    return (
      <div className="trackList">
        {this.createTrackList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList)