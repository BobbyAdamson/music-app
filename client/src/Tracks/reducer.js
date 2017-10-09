import initialState from './initialState'

export const Tracks = (state=initialState, action) => {
  switch(action.type) {
    case 'PLAYER_PLAY':
      return state.map(track => {
        if(track.id !== action.payload) {
          return track
        } else {
          return Object.assign({}, track, {
              isPlaying: true,
              playOrPause: "Pause"
          })
        }
      })
        
    case 'PLAYER_PAUSE':
      return state.map(track => {
        if(track.id !== action.payload) {
          return track
        } else {
          return Object.assign({}, track, {
          isPlaying: false,
            playOrPause: "Play"
          })
        }
    })

    case 'UPDATE_PROGRESS':
      return state.map(track => {
        if(track.id !== action.payload.trackId) {
          return track
        } else {
          return Object.assign({}, track, {
              currentTime: action.payload.currentTime, 
              progress: action.payload.progress
          })
        }
      })

    case 'SET_TRACK_DURATION':
      return state.map(track => {
        if(track.id !== action.payload.trackId) {
          return track
        } else {
          return Object.assign({}, state, {
              duration: action.payload.duration
          })
        }
      })

    default:
      return state;
  }
}