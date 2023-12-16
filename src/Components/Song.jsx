import React, { useContext } from 'react'
import { Card, CardBody, Container } from 'react-bootstrap'
import CurrentSongContext from '../Context/CurrentSongContext'
import Controls from './Controls'

const Song = () => {

    const { currentSong } = useContext(CurrentSongContext)







    return (
        <>
            <Container className='song-container d-flex justify-content-center align-items-center flex-column p-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={currentSong.cover} />
                    <CardBody>
                        <Card.Title>{currentSong.name}</Card.Title>
                        <Card.Text>{currentSong.artist}</Card.Text>

                    </CardBody>
                </Card>

                <Controls />
            </Container>

        </>
    )
}

export default Song
