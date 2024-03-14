const express = require('express');
const fs = require('fs')

const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

//This helps the app get the /notes section
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

//This gets the landing page 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//this gets the notes
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})




let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
