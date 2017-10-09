import React from 'react'

const Player = props => {
    return (
        <div className="trackFile container-fluid">
            <div className="row">
                <div className="col-4">
                    <h3>{props.currentlyPlaying.title}</h3>
                    <p>Uploaded by: Bobby</p>
                    <p>Date uploaded: Oct 5, 2017</p>
                </div>
                <div className="col-8">
                    <div className="playerComponent">
                        <div className="playerController">
                        <div className="progressBarContainer" style={{width: "100%", display: "block"}}>
                            <div className="progressBar" id="progressBar" style={{width: `${props.currentlyPlaying.progress}%`}}></div>
                        </div>
                            <a onClick={props.togglePlay.bind(this)}><i className="playToggle">{props.currentlyPlaying.playOrPause}</i></a>
                            <p><span className="currentTime">{props.currentlyPlaying.currentTime}</span>/<span className="duration">{props.currentlyPlaying.duration}</span></p>
                        </div>
                        <audio ref="player">
                            <source src={props.currentlyPlaying.trackUrl} />
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player