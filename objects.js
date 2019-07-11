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



/*
let user = {
    id: 1,
    name : 'John'
}
//Object.freeze(user);

Object.defineProperty(user,"email",{
    value: 'email@gmail.com',
    writable : true
});

Object.defineProperties(user,{
    city : {
        value: 'one'
    } ,
    street : {
        value :'Two'
    }  
} 
)
console.log(user); */


let _usr = {
    id: 1
};
console.log(_usr.id);

//Object.seal(_usr);
//Object.freeze(_usr);
//_usr.id = 5;

// add a new property to existing object
Object.defineProperty(_usr,"name",{
    value: 'Bob'
});

console.log(_usr);

const _emp = {
    id: 10
}
// not permitted for constant variables
//_emp = _usr;
console.log(_emp);

Object.defineProperties(_usr,{
    email: {
        value: 'bob@gm.com',
        writable : false
    },
    street: {
        value : 'Manyata'
    }
});
// not permitted to modify read only properties
//_usr.email = 'nobob@gg.com';
console.log(_usr);

const uMap = new Map();
uMap.set('name',"John");
uMap.set('email',"jo@gg.com");
uMap.set('address',"Blr");

const _uu = {
    id: 1,
    name: 'JOHN',
    email: 'joe@gg.com'
}

let _nUMap = Object.entries(_uu);
//[[id,1],[name,'JOHN']]
console.log('ENTRIES ',_nUMap[1]);

let _nUsr = Object.fromEntries(uMap);
// create object from map entries
console.log(_nUsr);

// create an object
let __nUser = Object.create({},{
    uId: {
        value : 1
    },
    name : {
        value: 'abc'
    }
});

// set one object from another
//__nUser = Object.assign(_usr);

console.log(__nUser);

let abc = {};
let xyz = abc;

