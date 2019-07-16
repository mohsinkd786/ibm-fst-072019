console.log('Hello welcome to Node js ');

function sayHello(){
    console.log('sayhello()');
}
sayHello();

const message = (_msg)=>{
    return 'Hello '+_msg;
}

const res = message('John');
console.log(res);