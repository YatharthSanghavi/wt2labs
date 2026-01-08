const EventEmitter = require('events');

let eventEmitter = new EventEmitter();
 
let geek1= (msg) => {
    console.log("Message from geek1: " + msg);
};
 
let geek2 = (msg) => {
    console.log("Message from geek2: " + msg);
};

eventEmitter.on('myEvent', geek1);
eventEmitter.on('myEvent', geek1);
eventEmitter.on('myEvent', geek2);
 
eventEmitter.removeListener('myEvent', geek1);
 
eventEmitter.emit('myEvent', "Event occurred");

eventEmitter.removeAllListeners('myEvent');

eventEmitter.emit('myEvent', "Event occurred");