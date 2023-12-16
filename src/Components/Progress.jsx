import React, { useContext, useRef, useState } from 'react';
import CurrentSongContext from '../Context/CurrentSongContext';

const Progress = () => {
    const { songDuration, audioRef } = useContext(CurrentSongContext);

    const progressBarRef = useRef(null);
    const isDragging = useRef(false);

    const onSeek = (newProgress) => {
        // Placeholder for additional logic when seeking
        // For example, you could update other UI elements or trigger events
        console.log(`Seeking to: ${newProgress * 100}%`);
    };

    const handleMouseDown = (event) => {
        isDragging.current = true;
        handleMouseMove(event);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (event) => {
        if (isDragging.current) {
            const progressBar = progressBarRef.current;
            const { left, width } = progressBar.getBoundingClientRect();
            const mouseX = event.clientX - left;
            const newProgress = Math.min(1, Math.max(0, mouseX / width));
            if (isFinite(songDuration.duration)) {
                const newTime = newProgress * songDuration.duration;
                audioRef.current.currentTime = newTime;
            }
        }
    };

    const handleClick = (event) => {
        const width = progressBarRef.current.clientWidth;
        const offset = event.nativeEvent.offsetX;
        const divprogress = offset / width;

        // Check if songDuration.currentTime is finite before using it
        if (isFinite(songDuration.duration)) {
            const newTime = divprogress * songDuration.duration;
            audioRef.current.currentTime = newTime;
        }

    };

    return (
        <>
            <div
                className="progress-bar-container"
                ref={progressBarRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onClick={handleClick}

            >
                <div className="progress-bar" style={{ width: '200px', border: 'solid 2px black', borderRadius: '8px' }}>
                    <div className="progress" style={{ width: `${Math.round(songDuration.currentTime / songDuration.duration * 100)}%`, height: '8px', backgroundColor: 'cyan' }}></div>
                    {/* <div className="knob" style={{ left: `${Math.round(songDuration.currentTime / songDuration.duration * 100) * 100}%`, height: '10px', width: '5px', backgroundColor: 'orange', borderRadius: '50%' }}></div> */}
                </div>
            </div>
        </>
    );
};

export default Progress;
