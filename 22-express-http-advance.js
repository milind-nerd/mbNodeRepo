const http = require('http');

//instead of writing HTML code here, take it from index.html
const {readFile, readFileSync} = require('fs');

//get all files => !! file is NOT in same folder, so move code to 02-express-tutorial to access index.html
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {

    //provides info about which resources are accessed
    //console.log(req.url);

    if(req.url === '/')
    {
    //200, tell browser what type of content is sent by us
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.write(homePage);
    res.end('Home page');
    }
    else if(req.url === '/about')
    {
    //200, tell browser what type of content is sent by us
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.write('<h1>ABOUT</h1>');
    res.end('About page');
    }
    else  
    {
    //200, tell browser what type of content is sent by us
    res.writeHead(400, {
        'content-type': 'text/html'
    });
    res.write('<h1>PAGE NOT FOUND</h1>');
    res.end('No page');
    }
});

server.listen(5003);
