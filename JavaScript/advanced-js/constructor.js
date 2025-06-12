// function dummyFn(x, y) {
//    console.log(this); Setting the context for this function
// }

// console.log(new dummyFn()); This will log an empty object whose type is dummyFn


function Person(name, age) {
    this.name = name, // The object has two properties: name and age 
    this.age = age
}
    // One of the properties of a function is the prototype property
    // Common prototype shared between John and Mary has a method called 'celebrateBirthday'
    // Both john and mary will be able to invoke it   
    Person.prototype.celebrateBirthday = function() { 
        this.age++;
};

// john = {
//     name: 'John',
//     age: 32,
//     celebrateBirthday: function() {
//         this.age++;
//     }
// }

// mary = {
//     name: 'Mary',
//     age: 22,
//     celebrateBirthday: function() {
//         this.age++;
//     }
// }

var john = new Person('John', 32); 
john.celebrateBirthday();
console.log(john);

var mary = new Person('Mary', 22);
mary.celebrateBirthday();
console.log(mary);

console.log(john.__proto__ === Person.prototype);
console.log(mary.__proto__ === Person.prototype);
