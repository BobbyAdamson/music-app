import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/trackList'
import TrackList from '../components/TrackList'

function mapStateToProps(state) {
  return {
    tracks: state.trackList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList)