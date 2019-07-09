'use strict';

console.log('Hello World')
/*document.write('Welcome to Javascript');
*/
var uId = 10;
console.log('uId is ',uId);
uId = 'Bob';
console.log(`uId is modified ,${uId}`);
let a = 11;
let b = 12;
// ADD
document.write(`SUM is ~ ${a+b}`);
document.write('<br />');
// DIFF
document.write(`DIFF is ~ ${a-b}`);
document.write('<br />');
// MUL
document.write(`PRODUCT is ~ ${a*b}`);
document.write('<br />');

let vals = [ 1, 4, 'Hello'];
// PRINT ARRAY
console.log(vals);
// Print Specific value
console.log(vals[2]);
// Modify an element
vals[1] = 88;

// RE PRINT ARRAY
console.log(vals);

delete vals[0];

// RE PRINT ARRAY
console.log(vals);

let user1 = {
    id: 1,
    name: 'User one',
    phone: 123,
    email: 'usr2@gg.com'
};

let user2 = {
    id: 2,
    name: 'User Two',
    phone: 456,
    email: 'usr2@gg.com'
}

let users = [
    user1, user2
];

console.log(users);

console.log(users[0].id);
if (users[0].email == undefined){
    console.log('Oops Email doesnt exist');
}else if(users[0].email == 'usr2@gg.com'){
    console.log('Within Else If');
    console.log(users[0].email);
}else{
    console.log('Within Else');
    console.log(users[0].email);
}
let i = 12;
let j = 11;
if(i == 12 && j == 12){
    console.log('If');
    console.log(`${i} is greater than ${j}`);
}else{
    console.log('Else');
    console.log(`${j} is greater than ${i}`);
}

var evenNums = [2,4,6,8];
evenNums.push(10);

console.log('Even Nums '+evenNums);
evenNums.pop();
console.log('Even Nums '+evenNums);

var oddNums = [1,3,5,7];
oddNums = oddNums.concat(evenNums);
console.log(oddNums);
// for loop
console.log('FOR Loop');
let _index = 0;
for(_index=0;_index<5;_index++){
    console.log(_index);
}
// while loop
console.log('WHile Loop');
_index = 0;
while(_index < 5){
    console.log(_index);
    _index++;
}
// do while
console.log('DO While Loop');
_index = 0;
do{
    console.log(_index);
    _index++;
} while(_index < 5);

//
console.log('Break Statement');
_index = 0;
for(_index= 0; _index< 5;_index++){
    console.log(_index);
    if(_index == 2){
        break;
    }
}
//
console.log('Continue Statement');
_index = 0;
for(_index= 0; _index< 5;_index++){
    if(_index == 2){
        continue;
    }
    console.log(_index);
}
// For Of
console.log('For In/ Of Loop');
let messages = ['Hello','Hi','Hola'];

for(let m of messages){
    console.log(m);
}
// For In
for(let m in messages){
    console.log(messages[m]);
}

vals = {
        one : 'One Value',
        two : 'Two Value'
    };
console.log(Object.keys(vals));

// Click event
function clickMe(){
    const name = document.getElementById('name');
    alert(`Hello ${name.value}`);
    name.value = 'IBM';
    let rows;
    for(let m in messages){
        rows +=`<tr><th>${m+1}</th><th>${messages[m]}</th></tr>`;
    }
    let _table =`<table>
                <tr><th>S.No</th><th>Message</th></tr>
                ${rows}
                </table>`;
    document.getElementById('msgs').innerHTML =_table;
}
let uMap = new Map();
uMap.set('one',1);
uMap.set('two',2);
uMap.set('three',3);

for(let [key,value] of uMap){
    console.log(`${key}: ${value}`);
}

