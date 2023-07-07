//video 71

const express = require('express');
const app = express();

// req => middleware => res
// request comes, we do something with it, and then send it to response

//logger is middleware here
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear;

    console.log(method, url, time);

    //NEXT will send program to next function. If not used, page will be loading for infinte time
    next();
}

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
