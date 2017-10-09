import React from 'react'
import Player from './Player'

const Track = props => {

	return (
		<div className="trackFile container-fluid">
			<div className="row">
				<div className="col-4">
					<h3>{props.title}</h3>
					<p>Uploaded by: Bobby</p>
					<p>Date uploaded: Oct 5, 2017</p>
				</div>
				<div className="col-8">
					<Player 
							track={props.track}
							playTrack={props.playTrack}
							pauseTrack={props.pauseTrack}
							updateProgress={props.updateProgress}
							setTrackDuration={props.setTrackDuration}
					/>
				</div>
			</div>
		</div>
	)
}

export default Track