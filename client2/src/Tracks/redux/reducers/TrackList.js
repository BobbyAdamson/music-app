import initialState from '../initialState'
import * as TrackListActions from '../../actions/actiontypes/trackList'

export const trackList = (state=initialState.trackList, action) => {
    console.log('action hit: ', action)
    
  switch(action.type) {
    case TrackListActions.LOAD_TRACK:
        console.log('loaded track')
        break;

    default:
      return state;
  }
}