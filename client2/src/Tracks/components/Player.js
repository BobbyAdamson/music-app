import React from 'react'

const Player = props => {
    console.log(props)
    return (
        <div className="trackFile container-fluid">
            <div className="row">
                <div className="col-4">
                    <h3>{props.currentTrack.title}</h3>
                    <p>Uploaded by: Bobby</p>
                    <p>Date uploaded: Oct 5, 2017</p>
                </div>
                <div className="col-8">
                    <div className="playerComponent">
                        <div className="playerController">
                        <div className="progressBarContainer" style={{width: "100%", display: "block"}}>
                            <div className="progressBar" id="progressBar" style={{width: `${props.currentTrack.progress}%`}}></div>
                        </div>
                            <a onClick={e => {props.togglePlay(props.currentTrack.isPlaying)}}><i className="playToggle">{props.currentTrack.isPlaying ? "Pause" : "Play"}</i></a>
                            <p><span className="currentTime">{props.currentTrack.currentTime}</span>/<span className="duration">{props.currentTrack.duration}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player