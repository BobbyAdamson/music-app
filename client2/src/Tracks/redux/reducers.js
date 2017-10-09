import {combineReducers} from 'redux'

import { CurrentlyPlaying } from './reducers/CurrentlyPlaying'

const practiceSpaces = combineReducers({
    currentlyPlaying: CurrentlyPlaying
})

export default practiceSpaces