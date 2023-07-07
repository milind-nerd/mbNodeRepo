//video 70

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

// get single product
/* app.get('/api/products/1',(req, res) => {
     const singleProduct = products.find((products) => products.id === 1); 
     res.json(singleProduct);
 });
 */
// above approach is incorrect, since imagine if we have 200 products. We cannot write 200 functions.
app.get('/api/products/:productID',(req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find((products) => products.id === Number(productID)); 

    if(!singleProduct)
    {return res.status(404).send('Product does not exist')}
    // send singleProduct to browser
    res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);

    const {search, limit} = req.query;
    let sortedProducts = [...products];

    if(search)
    {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    res.status(200).json(sortedProducts)
     
});


app.listen(5002,() => {
    console.log("Server is listening on 5002...");
});
