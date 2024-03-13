const express = require('express');
const fs = require('fs')

const path = require('path');
const app = express();
const PORT = 3001;


app.get('/', (req, res) => {
//route logic
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


app.post('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
//route logic

})

app.listen(PORT, () =>
    console.log(`Listening for requests on port ${PORT}! `)

);
