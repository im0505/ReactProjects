import React from 'react'
import { connect } from 'react-redux'

const SongDetail = (state) => {
    console.log(state.song)
    return <div>{state.song === null ? null : state.song.title}</div>
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);