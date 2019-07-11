class ArthmeticError extends Error{
    constructor(){
        super("Division by Zero");
    }
    getMessage(){
        return this.message;
    }
}

const calculate =(_first,_next) =>{
    let sum = 0;
    try{
        console.log('TRY called');
        if(_next == 0){
            throw new ArthmeticError();
        }else{
            sum = _first / _next;
        }
    }catch(error){
        console.log('CATCH called');
        console.log(error);
        sum = _first / 1;
    }
    return sum;
}
//
console.log('SUM is ',calculate(10,0));