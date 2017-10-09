import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Player extends Component {
    constructor(props) {
        super(props)

        this.state = props.track
    }

    playToggle() {
        this.props.playTrack(this.props.track.id)
        console.log('play clicked')
    }

    playing() {
        let updateTime = setInterval(() => {
            let
              currentTime = `${parseInt(0 + this.refs.player.currentTime / 60)}:${parseInt(this.refs.player.currentTime % 60)}`,
              progress = this.refs.player.currentTime / this.refs.player.duration * 100

            this.props.updateProgress(this.props.track.id, currentTime, progress)

        }, 500);
    }

    pause() {
        this.refs.player.pause()
    }

    setTrackDuration() {
      let duration = `${parseInt(this.refs.player.duration / 60)}:${parseInt(this.refs.player.duration % 60)}`

      this.props.setTrackDuration(this.props.track.id, duration)
    }

    componentDidMount() {
      this.refs.player.addEventListener('durationchange', () => {
        this.setTrackDuration();
      })
    }

    componentDidUpdate(prevProps, prevState) {
      if(prevProps.track.isPlaying !== this.props.track.isPlaying) {
        if(this.props.track.isPlaying) {
          this.playing();
        }
      }
    }
    
    render() {
        return (
            <div className="playerComponent">
                <div className="playerController">
                  <div className="progressBarContainer" style={{width: "100%", display: "block"}}>
                    <div className="progressBar" id="progressBar" style={{width: `${this.props.track.progress}%`}}></div>
                  </div>
                  <a ref="playToggle" onClick={this.playToggle.bind(this)}><i className="playToggle">{this.props.track.playOrPause}</i></a>
                  <p><span className="currentTime">{this.props.track.currentTime}</span>/<span className="duration">{this.props.track.duration}</span></p>
                </div>
                <audio ref="player">
                  <source src={this.props.track.trackUrl} />
                </audio>
            </div>
        )
    }
}

const playTrack = trackId => {
  return {
    type: 'PLAYER_PLAY',
    payload: trackId
  }
}

const pauseTrack = trackId => {
  return {
    type: 'PLAYER_PAUSE',
    payload: trackId
  }
}

const updateProgress = (trackId, currentTime, progress) => {
  return {
    type: 'UPDATE_PROGRESS',
    payload: {
      trackId, currentTime, progress
    }
  }
}

const setTrackDuration = (trackId, duration) => {
  return {
    type: 'SET_TRACK_DURATION',
    payload: {
      trackId, duration
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({playTrack, pauseTrack, updateProgress, setTrackDuration}, dispatch)
}

export default connect(null, mapDispatchToProps)(Player)