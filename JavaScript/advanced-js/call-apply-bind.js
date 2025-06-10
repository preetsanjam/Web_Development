function greet(greeting, name) {
    console.log(greeting + ' ' + name + '!')
    console.log('this is:', this);
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


// Three important methods of functions
// 1. call() 
// call() method changes the context of the function

// 'hello' is the new context of greet() function
// 'Good evening' and 'Mary' are the arguments
greet.call('hello', 'Good evening', 'Mary'); 

// 2. apply()
// Behaves just like call()
// The only difference being that arguments are provided in an array  

var args = ['Good evening', 'Mary'];
greet.apply('hello', args);

// With null, the context does not change
// The context is the same old global context
greet.apply(null, ['Hi', 'Sanjam']); 
