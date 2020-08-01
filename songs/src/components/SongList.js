import React from 'react'
import { connect } from 'react-redux';
import { selectSong } from '../actions'

const SongList = (state) => {

    const renderedList = () => {
        return state.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button
                            className='ui button primary'
                            onClick={() => {
                                state.selectSong(song)
                            }}
                        >
                            Select
                     </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        })
    }

    return <div className="ui divided list">{renderedList()}</div>
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);
