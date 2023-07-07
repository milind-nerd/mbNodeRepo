//video 73 => app.use => use logger.js file

const express = require('express');
const app = express();
const logger = require('./logger');

app.get('/', logger, (req, res) => 
{
    res.send('Home');
});

app.get('/About', logger, (req, res) => 
{
    res.send('About');
});

app.listen(5002,() => {
    console.log("Server is listening on 5002...");
});




