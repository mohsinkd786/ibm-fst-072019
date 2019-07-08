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

