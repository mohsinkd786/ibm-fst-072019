///<reference path="./Vehicle.ts" />

import { Vehicle } from "./Vehicle";
import { Car } from './structures/Car';
import { Engine } from './structures/Engine';
import { Performance } from './structures/Performance';

console.log(Vehicle.message());

class Volvo implements Engine, Performance {
    _id:number
    name:string
    private uId:number

    // overridden method
    getEngine(){
        return "Volvo";
    }
    
    // overridden method
    topSpeed(){
        return 1;
    }
    constructor(_id:number,name:string){
        this._id = _id,
        this.uId = _id; // private field
        this.name = name
    }
    getDetails():Car{
        return {
            id: this._id,
            name: this.name
        }
    }
    getUid(){
        return this.uId;
    }
}
// multiple inheritance isnt permitted
// multilevel can be achieved
class Suv extends Volvo {
    constructor(id:number,name:string){
        super(id,name);
    }
    getDetails():Car{
        return {
            id: this._id,
            name: this.name
        }
    }
}
class Premium extends Suv{
    constructor(_id,name){
        super(_id,name);
    }
    getDetails():Car{
        return {
            id: this._id,
            name: this.name
        }
    }
}
//
const _car = new Volvo(10,'Car');
_car._id = 11;
//_car.uId -- cannot access private fields outside the class
console.log(_car.getDetails());

const _volvo = new Suv(11,'Volvo');
console.log(_volvo.getDetails());

