const { readFile } = require('fs');

console.log("This is my first statement");

//check FILE PATH --> this is asynchronous function
readFile('./content/first1.txt', 'utf-8', (err, result) => {
    if(err)
    {
        console.log(err);
        return
    }
    console.log(result);
    console.log("This is my statement from inside the readFile Function");
}
);

console.log("This is my second statement");


