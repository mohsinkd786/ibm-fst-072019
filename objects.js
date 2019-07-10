'use strict';
class Sample{
    /*constructor(){
        console.log('Sample object created');
    } */
    constructor(id,msg){
        this.id = id;
        this.msg = msg;
    }
    sayHello(){
        console.log('Hello sayHello() ',this.msg);
    }
    static message(){
        console.log('Static Method message()');
    }
}

const sampleObj = new Sample(10,'Hello World');
// instance method
sampleObj.sayHello();
sampleObj.id = 7;
console.log(sampleObj.id);

// static method
Sample.message();