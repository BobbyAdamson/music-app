import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/player'
import Player from '../components/Player'

class PlayerContainer extends Component {
    constructor(props) {
        super(props.currentlyPlaying)
        console.log(props)
    }

    togglePlay() {
        if(!this.props.currentlyPlaying.isPlaying) {
          this.props.playTrack(this.props.currentlyPlaying.id)
        } else {
          this.props.pauseTrack(this.props.currentlyPlaying.id)
        }
    }

    calcDuration() {
        console.log(this)
        return `${parseInt(this.duration / 60)}:${parseInt(this.duration % 60)}`
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.currentlyPlaying.isPlaying !== this.props.currentlyPlaying.isPlaying) {
          if(this.props.currentlyPlaying.isPlaying) {
              console.log('playing')
            this.refs.player.play()
          } else {
              console.log('notplaying')
            this.refs.player.pause()
          }
        }
    }

    componentDidMount() {
        this.props.playTrack(this.props.currentlyPlaying.id)
    }

    componentWillUnmount() {
        this.props.pauseTrack(this.props.currentlyPlaying.id)
    }

    render() {
        return(
            <Player
                togglePlay={this.togglePlay}
                calcDuration={this.calcDuration}
                currentlyPlaying={this.props.currentlyPlaying}
            />
        )
    }
}

function mapStateToProps(state) {
  return {
    currentlyPlaying: state.currentlyPlaying
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)