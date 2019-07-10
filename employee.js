'use strict';
const Employee = class {
    address
    constructor(id1, name1, organization1){
        this.id = id1;
        this.name = name1;
        this.organization = organization1;
    }
    getEmployee(){
        this.address = 'Bengaluru';
        return this.id + ' '
                + this.name +' '
                + this.organization +' '
                + this.address; 
    }
    static getEmployeeDetails(){
        this.organization = 'My Custom Org';
        return "Hello "+ this.organization;
    }
}

const emp1 = new Employee(1,'Test user','IBM');
console.log(emp1.getEmployee());

console.log(Employee.getEmployeeDetails());
emp1.organization = 'Sample org';

console.log(emp1.getEmployee());
