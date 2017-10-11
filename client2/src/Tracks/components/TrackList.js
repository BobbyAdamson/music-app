import React from 'react'
// import Track from './Track'

const TrackList = props => {
    console.log(props)
  const createTrackList = () => {
    return props.tracks.map((track) => {
      return (
          'foo'
        // <Track 
        //   key={track.id}
        // />
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