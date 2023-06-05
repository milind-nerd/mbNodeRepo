const path = require('path');

console.log(path.sep);
//seperator used in path

const filePath = path.join('/','read-BuiltInModules.doc');
console.log(filePath);
//gets path of file

const base = path.basename(filePath);
console.log(base);
//gets base of path of file

const absolute = path.resolve(__dirname);
console.log(absolute);