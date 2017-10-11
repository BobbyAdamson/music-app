import {combineReducers} from 'redux'

import { currentTrack } from './reducers/CurrentTrack'
import { trackList } from './reducers/TrackList'

const practiceSpaces = combineReducers({
    currentTrack: currentTrack,
    trackList: trackList
})

export default practiceSpaces