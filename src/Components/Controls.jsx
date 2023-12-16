import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { SkipForward, SkipBackIcon, Pause, Play } from 'lucide-react';
import '../App.css';
import CurrentSongContext from '../Context/CurrentSongContext';
import Progress from './Progress';


const Controls = () => {

    const { songs, currentSong, setCurrentSong, audioRef, setisplaying, songDuration, isplaying } = useContext(CurrentSongContext);


    const handlePausePlay = () => {
        setisplaying((prev) => !prev);
    };


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        return formattedTime;
    };

    const skipForward = () => {
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (index === songs.length - 1) {
            setCurrentSong(songs[0])
        }
        else {
            setCurrentSong(songs[index + 1])
        }
        audioRef.current.currentTime = 0
    }

    const skipBack = () => {
        const index = songs.findIndex(x => x.name === currentSong.name)
        if (index === 0) {
            setCurrentSong(songs[songs.length - 1])
        }
        else {
            setCurrentSong(songs[index - 1])
        }
        audioRef.current.currentTime = 0
    }




    return (
        <>
            <Container className='player-container d-flex justify-content-center align-items-center flex-column py-3'>
                <div className='py-2 d-flex gap-2 align-items-center' style={{ width: '300px' }}>
                    <div className='current-duration me-auto'>{formatTime(songDuration.currentTime)}</div>

                    <Progress />
                    <div className='total-duration ms-auto'>{isFinite(songDuration.duration) ? formatTime(songDuration.duration) : '00:00'}</div>
                </div>
                <div className=' d-flex gap-5 py-2'>
                    <SkipBackIcon className='skip-forward' onClick={skipBack} />
                    {isplaying ? (
                        <Pause className='pause' onClick={handlePausePlay} />
                    ) : (
                        <Play className='play' onClick={handlePausePlay} />
                    )}
                    <SkipForward className='skip-back' onClick={skipForward} />
                </div>

            </Container>
        </>
    );
};

export default Controls;
