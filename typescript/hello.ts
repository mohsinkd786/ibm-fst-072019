let a = 'Hello';
let b:string = '10';

console.log("Hello");

const sayHello = (_msg):string =>{
    return `Hey ${_msg}`;
}

function message():string{
    return "Hello";
}

const sum = (_i,_j):number => {
    return _i + _j;
}

console.log(sayHello("John Doe"));
console.log(message());
console.log(sum(12,5));

let users:string[] = Array(2);

users[0] = 'Walter';
users[1] = 'Jessie'
users[2] = 'Gus';

console.log('String [] ');
users.forEach(u=>console.log("Name => "+u));

let ids:number[] = [8,3,4,12];

console.log('Numbers [] ');
ids.forEach(id=>console.log("ID is => "+id));

let userObjs:any[] = [
        "Hello",
        {
            id : 1,
            name : 'John'
        },
        1678,
        true
    ];

console.log(userObjs[2]);

let _uu:any = {
    id: 1,
    name : 'Sanders'
}
_uu.email = "joe@email.com";


interface Employee{
    id:number,
    name:number | string, // give 2 different data types
    address?:any // define optional field
}

let vivekEmp:Employee = {
    id: 1,
    name: 'Vivek'
}

console.log(vivekEmp);

interface Vehicle{
    engine:any,
    fuelType:string,
    torque:number
}

interface Car extends Vehicle{
    stereoType?:string,
    ac?:boolean
}

interface Speedster extends Car{
    topSpeed?:number
}
interface F1 {
    weight?: number
}
interface Formula1 extends Speedster,F1{
    fuelType:string // the parent type should be bigger(supercede) than the child type
}
const ferrari:Speedster= {
    ac: true,
    stereoType: 'Bose',
    engine : 5000,
    fuelType: 'JetFuel',
    torque: 10000
}

const mcLaren:Formula1={
    engine : 5000,
    fuelType: 'JetFuel',
    torque: 20000,
    weight: 500
}

interface BenzF1 extends Formula1{
    engine: string
}
const mBenz:Formula1 = {
    engine: 'V12',
    fuelType: 'JetFuel',
    torque: 20000,
    weight: 500
} 
console.log(ferrari);
console.log(mBenz);

interface Result {
    first:number,
    next: number,
    result:number,
    message:string
}
const _process = (_i:number,_j:number,_type?:string):Result=>{
    const _result = _i + _j;
    return {
        first: _i,
        next: _j,
        result: _result,
        message: `${_type} is ${_result}`
    }
}
//
let result = _process(10,5);
console.log(result);

result = _process(10,5,'SUM');
console.log(result);

const _operate = (_i:number|number[]|string,_j?:number):number|string=>{
    if(typeof _i == 'number'){
        return _i + _j;
    }
    else if(typeof _i == 'string'){
        //return parseInt(_i);
        return _i;
    }
    else{
        return _i[0] + _i[1];
    }
}
console.log(_operate(10,2));

const nums:number[] = [11,7];

console.log(_operate(nums));