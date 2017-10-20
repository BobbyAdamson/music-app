import * as TracksActions from './actionTypes/Tracks'
  
export const togglePlay = trackId => {
    return {
        type: TracksActions.TOGGLE_PLAY,
        trackId
    }
}

export const loadTrack = trackId => {
    return {
        type: TracksActions.LOAD_TRACK,
        trackId
    }
}