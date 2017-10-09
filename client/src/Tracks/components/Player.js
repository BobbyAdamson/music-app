import React, { Component } from 'react'

class Player extends Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  togglePlay() {
    if(!this.props.track.isPlaying) {
      this.props.playTrack(this.props.track.id)
    } else {
      this.props.pauseTrack(this.props.track.id)
    }
  }

  calcDuration() {
    console.log(this)
    return `${parseInt(this.duration / 60)}:${parseInt(this.duration % 60)}`
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.track.isPlaying !== this.props.track.isPlaying) {
      if(this.props.track.isPlaying) {
        this.refs.player.play()
      } else {
        this.refs.player.pause()
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
          <a onClick={this.togglePlay.bind(this)}><i className="playToggle">{this.props.track.playOrPause}</i></a>
          <p><span className="currentTime">{this.props.track.currentTime}</span>/<span className="duration">{this.props.track.duration}</span></p>
        </div>
        <audio ref="player">
          <source src={this.props.track.trackUrl} />
        </audio>
      </div>
    )
  }
}

export default Player