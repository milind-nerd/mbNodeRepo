const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res
// request comes, we do something with it, and then send it to response

app.use([logger, authorize]);

app.get('/',  (req, res) => 
{
    res.send('Home');
});

app.get('/About', (req, res) => 
{
    res.send('About');
});

app.listen(5002,() => {
    console.log("Server is listening on 5002...");
});
