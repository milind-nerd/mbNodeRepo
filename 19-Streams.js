//see read-Streams.doc

const {createReadStream} = require('fs');

const stream = createReadStream('./content/bigFile.txt', {highWaterMark: 900, encoding: 'utf8'});

stream.on('data', (result)=>{
    console.log(result);
});

stream.on('error', (err)=> {
    console.log(err);
});
//using this, you will get data in chunks (default 64 kb), instead of reading everything.

