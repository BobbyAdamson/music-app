import {combineReducers} from 'redux'

import { Tracks } from '../Tracks/reducer'

const practiceSpaces = combineReducers({
    tracks: Tracks
})

export default practiceSpaces