import initialState from '../initialState'
import * as PlayerActions from '../../actions/actiontypes/player'

export const CurrentlyPlaying = (state=initialState.currentlyPlaying, action) => {
  switch(action.type) {
    case PlayerActions.PLAYER_PLAY:
        console.log('action hit: ', action)
        return {...state, isPlaying: true, playOrPause: "Pause"}
        
    case PlayerActions.PLAYER_PAUSE:
        console.log('action hit: ', action)
        return {...state, isPlaying: false, playOrPause: "Play"}

    case PlayerActions.UPDATE_PROGRESS:
        console.log('action hit: ', action)
        return {...state, currentTime: action.payload.currentTime}

    default:
      return state;
  }
}