const express = require('express');
const fs = require('fs')

const path = require('path');
const app = express();
const PORT = 3001;


app.get('/notes', (req, res) => {
//route logic
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


//app.post('/notes', (req, res) => {
   // res.sendFile(path.join(__dirname, '/public/notes.html'))
//route logic

//})

//app.listen(PORT, () =>
 //   console.log(`Listening at http://localhost:${PORT} `)

//);
