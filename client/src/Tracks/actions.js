export const playTrack = trackId => {
    return {
      type: 'PLAYER_PLAY',
      payload: trackId
    }
  }
  
export const pauseTrack = trackId => {
    return {
      type: 'PLAYER_PAUSE',
      payload: trackId
    }
  }
  
export const updateProgress = (trackId, currentTime, progress) => {
    return {
      type: 'UPDATE_PROGRESS',
      payload: {
        trackId, currentTime, progress
      }
    }
  }
  
export const setTrackDuration = (trackId, duration) => {
    return {
      type: 'SET_TRACK_DURATION',
      payload: {
        trackId, duration
      }
    }
  }
  