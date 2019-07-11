console.log('CLOSURE $$$$');
const calculate = (_num1)=>{
    return (_operator)=>{
        switch(_operator){
            case 'ADD':
                return (_num2)=>{
                        return _num1 + _num2;
                }
            case 'DIFF':
                return (_num2)=>{
                        return _num1 - _num2;
                }
            case 'MUL':
                return (_num2)=>{
                        return _num1 * _num2;
                }
            case 'DIV':
                return (_num2)=>{
                        return _num1 / _num2;
                }
            default :
                return (_num2) =>{
                    return _num1 + _num2;
                }
        }
    }
}

let _operation = calculate(3);
let _add = _operation('ADD');

let _diff = calculate(12)('DIFF')(3);
let _mul = calculate(4)('MUL')(3);
let _div = calculate(25)('DIV')(5);

console.log(`SUM : ${_add(6)}`);
console.log(`DIFF : ${_diff}`);
console.log(`PRODUCT : ${_mul}`);
console.log(`DIVISION : ${_div}`);
