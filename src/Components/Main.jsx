import React, { useContext } from 'react'
import Song from './Song'
import CurrentSongContext from '../Context/CurrentSongContext'

const Main = () => {

    const { currentSong } = useContext(CurrentSongContext)
    return (
        <div className='main py-5' style={{ backgroundImage: `linear-gradient(${currentSong.color[0]}, ${currentSong.color[1]})` }}>
            <Song />
        </div>
    )
}

export default Main
