const emitter = require('./calc').calcEmitter;

//const obj = new Calc();

// process object to access arguments
//process.argv
let _first = parseInt(process.argv[2] || '5');
let _next = parseInt(process.argv[3] || '7');
let _method = process.argv[4];
//console.log(obj._add(_first,_next));

emitter.emit('calcListener',JSON.stringify({
    method : _method,
    first: _first,
    next : _next
}));


