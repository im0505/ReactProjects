import { combineReducers } from 'redux'


const songsReducers = () => {
    return [
        { title: "Gee", duration: '4:30' },
        { title: "bigbang", duration: "2:30" },
        { title: "some song ", duration: '3:10' },
        { title: "sad song ", duration: '1:10' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
})