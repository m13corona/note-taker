//const fs = require('fs');
//const path = require('path');
//const express = require('express');
//const app = express();

// Define the route to get the notes
//app.get('/api/notes', (req, res) => {
 //   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
//});

    // Read the db.json file
  //  fs.readFile(path.join(__dirname, '/db/db.json'), 'utf8', (err, data) => {
        
    //});


// Start the server
//const PORT = process.env.PORT || 3001;
//app.listen(PORT, () => {
  //  console.log(`Listening at http://localhost:${PORT}`);
//});

const list = require('express').Router();   //tips
const { readFromFile, readAndAppend } = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');

//GET Route for retrieving all the notes
list.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//Route for a new note
list.post('/', (req, res) => {
  console.log(req.body);

  const { listItem, noteTitle,  } = req.body;

  if (req.body) {
    const newList = {
      listItem,
      noteTitle,
      listItem_id: uuidv4(),
    };

    readAndAppend(newList, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = list;