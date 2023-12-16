
const express = require('express')
const app = express()
const ncs = require('nocopyrightsounds-api')
const port = 5000;


const getSong = async () => {
    const songs = await ncs.getSongs()

    // use the songs here
    console.log(songs)
}




app.listen(port, () => {
    console.log('connected')
    getSong()
})