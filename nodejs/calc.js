const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();
class Calculator{
    _add(i,j){
        return i + j;
    }
    _sub(i,j){
        return i - j;
    }
    _mul(i,j){
        return i * j;
    }
}

class CalculatorListener {
    _execute(request){
        let _request = JSON.parse(request);
        const _calObj = new Calculator();
        switch(_request.method){
            case 'ADD':
                    console.log(` SUM is : ${_calObj._add(_request.first,_request.next)}`);
                    break;
            case 'DIFF':
                    console.log(`DIFF is : ${_calObj._sub(_request.first,_request.next)}`);
                    break;
        }
    }
}

const calcListner = new CalculatorListener();

emitter.addListener('calcListener',calcListner._execute);
module.exports = {
   calcEmitter : emitter
}