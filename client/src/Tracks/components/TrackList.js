import React from 'react'
import Track from './Track'

const TrackList = props => {
  const createTrackList = () => {
    return props.tracks.map((track) => {
      return (
        <Track 
          key={track.id}
          track={track}
          playTrack={props.playTrack}
          pauseTrack={props.pauseTrack}
          updateProgress={props.updateProgress}
          setTrackDuration={props.setTrackDuration}
        />
      )
    })
  }
    
  return (
    <div className="trackList">
        {createTrackList()}
    </div>
  )
}

export default TrackList