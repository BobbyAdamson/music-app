import initialState from './initialState'

export const Tracks = (state=initialState, action) => {
    switch(action.type) {
        case 'PLAYER_PLAY':
        case 'PLAYER_PAUSE':
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

        case 'UPDATE_PROGRESS':
            return state.map(track => {
                if(track.id !== action.payload.trackId) {
                    return track
                } else {
                    console.log(action.payload)
                    return Object.assign({}, track, {
                        currentTime: action.payload.currentTime, 
                        progress: action.payload.progress
                    })
                }
            })

        case 'SET_TRACK_DURATION':
        console.log('track duration', action.payload)
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