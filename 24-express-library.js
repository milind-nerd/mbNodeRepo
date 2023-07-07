const express = require('express');
const app = express();

app.get('/',(req,res) => {
res.send('Home');
});

app.get('/about',(req,res) => {
    res.send('About');
    });

//if page does not exist => also send 404
app.all('*',(req,res) => {
    res.status(404);
    res.send('Page does not exist');
    });

app.listen(5002, () => {
    console.log("Server is on listening on 5002");
});
