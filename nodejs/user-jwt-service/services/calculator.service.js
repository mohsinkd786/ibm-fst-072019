const add = (i,j)=>{
    return i + j;
}

const sub = (i,j)=>{
    return i - j;
}
const div = (i,j)=>{
    if(j == 0){
        throw new Error('Division by Zero');
    }else{
        return i / j; 
    }
} 
const err = ()=>{
    throw new Error('Division by Zero');
}

module.exports = {
    add,
    sub,
    div,
    err
}