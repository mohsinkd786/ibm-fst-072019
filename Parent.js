class Parent{
    constructor(_msg){
        this.msg = _msg;
    }
    message(){
        console.log(this.msg);
    }
    static getMessage(){
        console.log('Static Get Message()');
    }
}

class Child extends Parent{
    constructor(_msg){
        super(_msg);
    }
    message(){
        console.log(this.msg);
        // make call to parent message
        super.message();
    }
    customMessage(){
        // child class method
        this.message();
        // parent class method
        super.message();
        //this.msg;
    }
}
class GrandChild extends Child{
    customMessage(){
        super.message();
    }
}

const obj = new Child("Child Object");
// instance method
obj.message();
// static method
Child.getMessage();

const gChild = new GrandChild();
gChild.customMessage();