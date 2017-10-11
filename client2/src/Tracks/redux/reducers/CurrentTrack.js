import initialState from '../initialState'
import * as PlayerActions from '../../actions/actiontypes/player'

export const currentTrack = (state=initialState.currentTrack, action) => {
    console.log('action hit: ', action)
    
  switch(action.type) {
    case PlayerActions.PLAYER_PLAY:
        return {...state, isPlaying: true, playOrPause: "Pause"}
        
    case PlayerActions.PLAYER_PAUSE:
        return {...state, isPlaying: false, playOrPause: "Play"}

    case PlayerActions.UPDATE_PROGRESS:
        return {...state, currentTime: action.payload.currentTime}

    case PlayerActions.TOGGLE_PLAY:
        return {...state, isPlaying: !state.isPlaying}

    default:
      return state;
  }
}