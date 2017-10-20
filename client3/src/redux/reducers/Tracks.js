import initialState from '../initialState'
import * as TracksActions from '../actions/actionTypes/Tracks'

export const tracks = (state=initialState, action) => {
    console.log('action hit: ', action)
    
  switch(action.type) {
    case TracksActions.LOAD_TRACK:
        console.log('loaded track')
        break;

    default:
      return state;
  }
}