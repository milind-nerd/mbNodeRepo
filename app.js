const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.get('/',(req,res) => {
res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*',(req, res)=>{
    res.status(404).send('Page does not exist!');
});

app.listen(5002,() => {
    console.log("Server is listening on 5002...");
});