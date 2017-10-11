import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/player'
import Player from '../components/Player'

class PlayerContainer extends Component {
    constructor(props) {
        super(props.currentTrack)
        
        this.audio = new Audio(props.currentTrack.trackUrl)
    }

    calcDuration() {
        return `${parseInt(this.duration / 60)}:${parseInt(this.duration % 60)}`
    }

    audioPlayerListener(audio) {
        audio.addEventListener('ended', this.props.togglePlay, false)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.currentTrack.isPlaying !== this.props.currentTrack.isPlaying) {
            if(this.props.currentTrack.isPlaying) {
                this.audio.play()
            } else {
                this.audio.pause()
            }
        }
    }

    componentDidMount() {
        this.props.playTrack(this.props.currentTrack.id)

        this.audioPlayerListener(this.audio)
    }

    componentWillUnmount() {
        this.props.pauseTrack(this.props.currentTrack.id)
    }

    render() {
        return(
            <Player
                playTrack={this.props.playTrack}
                pauseTrack={this.props.pauseTrack}
                calcDuration={this.calcDuration}
                currentTrack={this.props.currentTrack}
                togglePlay={this.props.togglePlay}
            />
        )
    }
}

function mapStateToProps(state) {
  return {
    currentTrack: state.currentTrack
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)