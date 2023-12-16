import React from 'react'
import { Button, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useState, useContext, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CurrentSongContext from '../Context/CurrentSongContext';


const Header = () => {

    const [show, setShow] = useState(false);
    const { songs, currentSong, setCurrentSong, audioRef, isplaying, songDuration, setSongDuration } = useContext(CurrentSongContext)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangeSong = (item) => {
        setCurrentSong(item)


    }
    const onPlaying = () => {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        console.log(songDuration)
        setSongDuration({
            duration: duration,
            currentTime: currentTime,

        })
    }

    useEffect(() => {
        if (isplaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isplaying, currentSong, audioRef])


    return (
        <>

            <header>
                <Navbar expand="lg" className='navbar navbar-dark bg-dark'  >
                    <Container>
                        <Navbar.Brand className='text-light' href="#home">Music Player</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav aligm-items-center">

                            <Nav className="ms-auto d-flex justify-content-center align-items-center gap-3 nav-container">
                                <InputGroup style={{ width: '300px' }}>
                                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Enter Song name"
                                        aria-label="Song"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Button className='btn btn-primary btn-library' onClick={handleShow}>Songs</Button>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <Offcanvas show={show} onHide={handleClose} className='bg-dark text-light'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Songs</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='library-container'>
                    {songs.map((item, key) => (
                        <div className='songs-list p-3 d-flex gap-3 library-song-container' key={key} onClick={() => handleChangeSong(item)} >
                            <img height={60} width={60} src={item.cover} alt="cover" />
                            <div>
                                <p className='fs-5 fw-bold'>{item.name}</p>
                                <p>{item.artist}</p>
                            </div>
                        </div>
                    ))}


                </Offcanvas.Body>
            </Offcanvas>
            <audio src={currentSong.audio} ref={audioRef} onTimeUpdate={onPlaying} />

        </>
    )
}

export default Header
