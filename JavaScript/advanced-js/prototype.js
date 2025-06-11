var obj = {
    x: 1 // x is an 'own property' of obj 
};

var proto = {
    y: 2
};

console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);

Object.setPrototypeOf(obj, proto); // obj inherits properties of proto (y)

// obj inherits properties of y
console.log(obj.y);

var obj2 = {
    z: 3
};

Object.setPrototypeOf(obj2, proto);

// Changing the value of y to 100 
proto.y = 100;

// Remark:
// With the change in the value of y, both obj and obj2 changes


var john = {
    name: 'John',
    age: 32
};

 var jane = {
    name: 'Jane',
    age: 28
};

 var johnPrototype = {
    numFeet: 2,
    numHands: 2,
    introduce: function() {
        console.log( this.name );
    }
};

Object.setPrototypeOf( john, johnPrototype );
Object.setPrototypeOf( jane, johnPrototype );

john.__proto__.numFeet = 3;
console.log( jane.numFeet );