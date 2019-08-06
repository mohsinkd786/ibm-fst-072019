"use strict";
///<reference path="./Vehicle.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehicle_1 = require("./Vehicle");
console.log(Vehicle_1.Vehicle.message());
var Volvo = /** @class */ (function () {
    function Volvo(_id, name) {
        this._id = _id,
            this.uId = _id; // private field
        this.name = name;
    }
    // overridden method
    Volvo.prototype.getEngine = function () {
        return "Volvo";
    };
    // overridden method
    Volvo.prototype.topSpeed = function () {
        return 1;
    };
    Volvo.prototype.getDetails = function () {
        return {
            id: this._id,
            name: this.name
        };
    };
    Volvo.prototype.getUid = function () {
        return this.uId;
    };
    return Volvo;
}());
// multiple inheritance isnt permitted
// multilevel can be achieved
var Suv = /** @class */ (function (_super) {
    __extends(Suv, _super);
    function Suv(id, name) {
        return _super.call(this, id, name) || this;
    }
    Suv.prototype.getDetails = function () {
        return {
            id: this._id,
            name: this.name
        };
    };
    return Suv;
}(Volvo));
var Premium = /** @class */ (function (_super) {
    __extends(Premium, _super);
    function Premium(_id, name) {
        return _super.call(this, _id, name) || this;
    }
    Premium.prototype.getDetails = function () {
        return {
            id: this._id,
            name: this.name
        };
    };
    return Premium;
}(Suv));
//
var _car = new Volvo(10, 'Car');
_car._id = 11;
//_car.uId -- cannot access private fields outside the class
console.log(_car.getDetails());
var _volvo = new Suv(11, 'Volvo');
console.log(_volvo.getDetails());
function test(abc) {
    return abc;
}
test("Hello");
var test1 = function (aa) {
    console.log(typeof aa);
    return aa;
};
test1(10);
var bbS = {
    names: [[
            {
                name: "One"
            },
            {
                name: "Two"
            }
        ]]
};
console.log(bbS.names);
// flat the array
var newNames = [].concat.apply([], bbS.names);
console.log(newNames);
