import React, { useRef, useState } from 'react'
import CurrentSongContext from './CurrentSongContext'
import chillHop from '../data'

const CurrentSongProvider = ({ children }) => {
    const songs = chillHop()
    const [currentSong, setCurrentSong] = useState(songs[0])
    const audioRef = useRef();
    const [isplaying, setisplaying] = useState(false);
    const [songDuration, setSongDuration] = useState({
        duration: 0,
        currentTime: 0,

    })
    return (
        <>
            <CurrentSongContext.Provider value={{ songs, currentSong, setCurrentSong, audioRef, isplaying, setisplaying, songDuration, setSongDuration }}>
                {children}
            </CurrentSongContext.Provider>
        </>
    )
}

export default CurrentSongProvider
