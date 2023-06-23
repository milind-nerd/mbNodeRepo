const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//response is the name of event, which, when takes place, do something => DO
customEmitter.on('response', (name, id)=>{
    console.log("Data is received " + name + " " + id);
});

customEmitter.on('response', ()=>{
    //do other logic then previous function
    console.log("Data is received second time");
});

//EMIT
customEmitter.emit('response', "Milind", 7);


//order matter=> line 7 will be called always before line 12