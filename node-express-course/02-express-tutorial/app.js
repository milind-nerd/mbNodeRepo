const http = require('http');

//instead of writing HTML code here, take it from index.html
const {readFile, readFileSync} = require('fs');

//get all files => !! file is NOT in same folder, so move code to 02-express-tutorial to access index.html
const homePage = readFileSync('./navbar-app/index.html');
//access all resources like css, logo
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

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
    else if(req.url === '/styles.css')
    {
    //200, tell browser what type of content is sent by us
    res.writeHead(200, {
        'content-type': 'text/css'
    });
    res.write(homeStyles);
    res.end();
    }
    else if(req.url === '/logo.svg')
    {
    //200, tell browser what type of content is sent by us
    res.writeHead(200, {
        'content-type': 'image/svg+xml'
    });
    res.write(homeImage);
    res.end();
    }
    else if(req.url === '/browser-app.js')
    {
    //200, tell browser what type of content is sent by us
    res.writeHead(200, {
        'content-type': 'text/javascript'
    });
    res.write(homeLogic);
    res.end();
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
