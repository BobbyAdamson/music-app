import * as PlayerActions from './actiontypes/player'

export const playTrack = trackId => {
    return {
      type: PlayerActions.PLAYER_PLAY,
      payload: trackId
    }
  }
  
export const pauseTrack = trackId => {
    return {
      type: PlayerActions.PLAYER_PAUSE,
      payload: trackId
    }
  }
  
export const updateProgress = (trackId, currentTime, progress) => {
    return {
      type: PlayerActions.UPDATE_PROGRESS,
      payload: {
        trackId, currentTime, progress
      }
    }
  }
  
export const setTrackDuration = (trackId, duration) => {
    return {
      type: PlayerActions.SET_TRACK_DURATION,
      payload: {
        trackId, duration
      }
    }
  }
  
export const togglePlay = (trackId) => {
  return {
    type: PlayerActions.TOGGLE_PLAY
  }
}