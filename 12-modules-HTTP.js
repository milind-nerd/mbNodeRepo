const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Welcome User My Own Webpage');
    res.end();
});

server.listen(8000);

