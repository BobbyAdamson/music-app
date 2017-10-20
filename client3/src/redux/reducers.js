import {combineReducers} from 'redux'

import { tracks } from './reducers/Tracks'

const practiceSpaces = combineReducers({
    tracks
})

export default practiceSpaces