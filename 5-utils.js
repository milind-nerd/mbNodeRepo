const sayHi = (name) =>
{
    console.log("Hello " + name);
}

module.exports = sayHi;

//BELOW CODE IS FROM APP.js
//Modules - vid 13, 14
//modules are used to split your code into different files.
//every file in NODE.JS is a module by default.

const names = require('./4-names');
// where will we get names from? 
const sayHi = require('./5-utils');
// where will we get function from? 

/*
const john = "John";
const Peter = "Peter";
const secret = "SUPER SECRET DOCUMENT";

const sayHi = (name) =>
{
    console.log("Helo " + name);
}
*/

 
sayHi(names.peter);
sayHi(names.john);
sayHi("MILIND");
 

// Lets split names & function to another file. 
// Hence, move line 6-9 to 4-names.js & function to 5-utils.js
