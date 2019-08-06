function message<T>(_msg:T){
    return _msg;
}

message<number>(10);

// Parent
interface Mammal{
    id: number
}

const details ={
    dog: {
            breed:{
                Labrador: 'Labrador'
            }
    },
    lion: {
        strength : '2000'
    }
}

// Dog
interface Dog extends Mammal{
    breed:string
}

// Lion
interface Lion extends Mammal{
    strength:string
}

const mammalDetails = <T extends Mammal>(_u:T):T=>{
    //console.log(_u);
    if(typeof _u == "object"){
        return _u;
    }
    return _u;
}
//mammalDetails<string>("string");
//mammalDetails<number>(10);

//Sub child
// Dog
let mDetails:Dog|Lion  = mammalDetails<Dog>({
    id: 1,
    breed: details.dog.breed.Labrador
});

console.log(mDetails);

// Lion
mDetails = mammalDetails<Lion>({
    id: 2,
    strength: details.lion.strength
});

console.log(mDetails);


class A<X extends Mammal,Y extends string[] | string>{
    id:number
    animal:X
    country:Y
    constructor( id:number ,animal:X,country:Y){
        this.id = id
        this.animal = animal
        this.country = country
    }
    getAnimal():X{
        return this.animal;
    }
    getCountry():Y{
        return this.country;
    }
}

const dogA = new A<Dog,string[]>(1, { id: 1, breed: details.dog.breed.Labrador },["India"]);

console.log(dogA.getAnimal());
console.log(dogA.getCountry());

