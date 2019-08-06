function message(_msg) {
    return _msg;
}
message(10);
var details = {
    dog: {
        breed: {
            Labrador: 'Labrador'
        }
    },
    lion: {
        strength: '2000'
    }
};
var mammalDetails = function (_u) {
    //console.log(_u);
    if (typeof _u == "object") {
        return _u;
    }
    return _u;
};
//mammalDetails<string>("string");
//mammalDetails<number>(10);
//Sub child
// Dog
var mDetails = mammalDetails({
    id: 1,
    breed: details.dog.breed.Labrador
});
console.log(mDetails);
// Lion
mDetails = mammalDetails({
    id: 2,
    strength: details.lion.strength
});
console.log(mDetails);
var A = /** @class */ (function () {
    function A(id, animal) {
        this.id = id;
        this.animal = animal;
    }
    A.prototype.getAnimal = function () {
        return this.animal;
    };
    return A;
}());
var dogA = new A(1, { id: 1, breed: details.dog.breed.Labrador });
console.log(dogA.getAnimal());
