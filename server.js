const express = require('express');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
//route logic

});


app.post('/notes', (req, res) => {
//route logic

})


app.listen(PORT, () =>
    console.log(`Listening for requests on port ${PORT}! `)

);
