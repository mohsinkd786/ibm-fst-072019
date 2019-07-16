const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

const message =(_msg)=>{
    console.log(_msg);
}

emitter.addListener('sayHelloListener',message);

// will get triggered only once
emitter.once('messageListener',message);
emitter.on('messageListener1',message);

// 
emitter.emit('sayHelloListener',"Hello world");
emitter.emit('sayHelloListener',JSON.stringify({
    id: 1,
    name : 'Test user'
}));

emitter.emit('messageListener',"Welcome ");
emitter.emit('messageListener',"Node js");

//console.log(emitter.listeners("messageListener"));
//console.log(emitter.getMaxListeners());
//console.log(emitter);

emitter.emit('messageListener1','On ');
// turn off the listener
emitter.off('messageListener1',message);

console.log(emitter);

emitter.emit('messageListener1','Off ');
// remove a listener
emitter.removeListener('sayHelloListener',message);
// reset 
emitter.setMaxListeners(20);
console.log(emitter);