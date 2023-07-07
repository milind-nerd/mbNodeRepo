const express = require('express');
const path = require('path');
const app = express();
const {products} = require('./data');

// You dont have to write code for logo.css and styles. Just using below line, they are accessible
app.use(express.static('./public'));

// app.get('/',(req,res) => {
// res.json([{user: 'Milind'},{name:'Bhatt'}]);
// });

// INstead of hard coding values like above, we will use it from data file
app.get('/',(req,res) => {
    res.send('<h1>HOME PAGE</h1><a href="/api/products"> PRODUCTS  </a>');
});

app.get('/api/products',(req, res) => {
    const newProducts = products.map((products) => {
        const {id, name, image} = products;
        return {id, name, image};
    });
    res.json(newProducts);
});



app.listen(5002,() => {
    console.log("Server is listening on 5002...");
});
