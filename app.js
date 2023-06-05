/* how can you access external modules? 
First step, install them (see read-npm.doc)
Next, define it like line 5
*/
const _ = require('lodash');

const items = [1, [2, [7]]]
const newItems = _.flattenDeep(items);

console.log(newItems);

/*
IMP:
Simply using "npm install lodash", like in video 28, gave error "lodash not found".
Hence, use command npm install lodash --save to install Lodash
*/ 