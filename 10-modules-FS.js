// !! Synchronous approach !!

// const fs = require('fs'); => vid - 20
// fs.writeFileSync();
// In this file, we use Alternate syntax:
const {readFileSync, writeFileSync} = require('fs');

// read from first.txt and second.txt
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first + " AND " + second);

//create new file & write data from first.txt & second.txt 
writeFileSync('./content/third.txt',first + " and " + second);