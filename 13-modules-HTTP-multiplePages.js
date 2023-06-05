const http = require('http');
const server = http.createServer((req, res) => {
    
    //URL property -> tell which end point client is requesting
    if(req.url === '/')
    {
        res.end("Welcome to my HOMEPAGE");
    }
    else if(req.url === '/about')
    {
        res.end("Welcome to my ABOUTPAGE");
    }
    else 
    {
        res.end('Oops, page not found!');
    }

    
});

server.listen(8000);