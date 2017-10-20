import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/Tracks'

class Player extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="player">player</div>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Player)