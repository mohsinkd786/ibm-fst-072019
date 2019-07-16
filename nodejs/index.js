const calc = require('./calc').Calc;
// create object for imported class
const _obj = new calc();
let i = parseInt(process.argv[2] || '5');
let j = parseInt(process.argv[3] || '6');

console.log(`SUM is ${_obj._add(i,j)}`);