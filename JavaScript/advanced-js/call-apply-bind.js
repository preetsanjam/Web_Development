function greet(greeting, name) {
    console.log(greeting + ' ' + name + '!')
};

greet('Good Morning', 'John');

console.log(greet instanceof Object); // If true, it means function greet is an object

// Remarks:
// Object is a built-in class in JS
// In JS, everything that is an object is an instanceof the Object class 
// Every function is an object
// This is the reason we are able to pass functions to other functions and return functions

// Because functions are objects, these can have properties and methods
// Recall: Objects have properties and methods

// property 'x' is assigned to function greet()   
greet.x = 100;
console.log(greet.x);

// method is assigned to function greet()
greet.foo = function() {
    console.log('greet.foo is called');
};

greet.foo();

