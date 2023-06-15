// shared 
const john = "John";
const peter = "Peter";
//local: not shared
const secret = "SUPER SECRET DOCUMENT";

//console.log(module);
/*
Module has property 
exports: {}
in it.
So whatever you dump in this export, will be exported by this file, and can be used by other files.
*/ 
module.exports = {john, peter};


