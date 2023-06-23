const {createReadStream} = require('fs');
var http = require('http');
var fs = require('fs');

/*
http.createServer(function (req, res) {
    const text = fs.readFileSync('./content/bigFile.txt', 'utf-8');
    res.end(text);
}
).listen(5003);
*/

// too big file sent to browser using code above. Hence, use Streams
http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/bigFile.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf-8');

    fileStream.on('open',() =>
    {
        fileStream.pipe(res);

    });

    fileStream.on('error',(err) => {
        res.end(err);
    }

    );

}
).listen(5003);