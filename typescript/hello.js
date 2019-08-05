var a = 'Hello';
var b = '10';
console.log("Hello");
var sayHello = function (_msg) {
    return "Hey " + _msg;
};
function message() {
    return "Hello";
}
var sum = function (_i, _j) {
    return _i + _j;
};
console.log(sayHello("John Doe"));
console.log(message());
console.log(sum(12, 5));
var users = Array(2);
users[0] = 'Walter';
users[1] = 'Jessie';
users[2] = 'Gus';
console.log('String [] ');
users.forEach(function (u) { return console.log("Name => " + u); });
var ids = [8, 3, 4, 12];
console.log('Numbers [] ');
ids.forEach(function (id) { return console.log("ID is => " + id); });
var userObjs = [
    "Hello",
    {
        id: 1,
        name: 'John'
    },
    1678,
    true
];
console.log(userObjs[2]);
var _uu = {
    id: 1,
    name: 'Sanders'
};
_uu.email = "joe@email.com";
var vivekEmp = {
    id: 1,
    name: 'Vivek'
};
console.log(vivekEmp);
var ferrari = {
    ac: true,
    stereoType: 'Bose',
    engine: 5000,
    fuelType: 'JetFuel',
    torque: 10000
};
var mcLaren = {
    engine: 5000,
    fuelType: 'JetFuel',
    torque: 20000,
    weight: 500
};
var mBenz = {
    engine: 'V12',
    fuelType: 'JetFuel',
    torque: 20000,
    weight: 500
};
console.log(ferrari);
console.log(mBenz);
var _process = function (_i, _j, _type) {
    var _result = _i + _j;
    return {
        first: _i,
        next: _j,
        result: _result,
        message: _type + " is " + _result
    };
};
//
var result = _process(10, 5);
console.log(result);
result = _process(10, 5, 'SUM');
console.log(result);
var _operate = function (_i, _j) {
    if (typeof _i == 'number') {
        return _i + _j;
    }
    else {
        return _i[0] + _i[1];
    }
};
console.log(_operate(10, 2));
var nums = [11, 7];
console.log(_operate(nums));
