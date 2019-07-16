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

class Custom {
    _execute(){
        console.log('Execute');
    }
}

module.exports = {
    Calculator
}