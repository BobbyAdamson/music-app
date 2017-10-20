import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/Tracks'

class List extends Component {
    constructor(props) {
        super(props)
    }

    createTrackList() {
        console.log(this.props)
        return this.props.tracks.map((track) => {
            return (
                'foo'
              // <Track 
              //   key={track.id}
              // />
            )
        })
    }
    
    render() {
        return (
            <div className="trackList">
                tracklist:
                {this.createTrackList}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(List)