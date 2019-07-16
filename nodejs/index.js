const Calc = require('./calc').Calculator;
const obj = new Calc();

// process object to access arguments
//process.argv
let _first = parseInt(process.argv[2] || '5');
let _next = parseInt(process.argv[3] || '7');
console.log(obj._add(_first,_next));