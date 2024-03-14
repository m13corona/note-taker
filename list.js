const list = require('express').Router();   
const { readFromFile, readAndAppend } = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');

//Route for retrieving all the notes
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