<<<<<<< HEAD
// let x = 1;
// console.log(x);


// The following code throws an error
// Error: Identifier 'x' has already been declared
=======
let x = 1;
console.log(x);


// The following code throws an error
// Returns "Identifier 'x' has already been declared"
>>>>>>> 9b9b0b25b37834a83729024af515c68caab308d8
// let x = 2; 
// console.log(x);

// var x = 2; Throws an error

<<<<<<< HEAD
// var y = 1;
// console.log(y);

// var y = 2;
// console.log(y);

if(true) {
    let x = 1; // Block-scoped
    var y = 1; // Global variable
}

// console.log(x); // Thorws an error because 'x' declared with 'let' keyword is block-scoped
                // It must be called within the block of code 
console.log(y);

// console.log(a); Throws an error because 'a' declared with 'let' are not hoisted
// Variable 'a' is unavailable before the line of declaration  

console.log(b); // No error because 'b' declared with 'var' are hoisted
                // Returns undefined -> Variable 'b' has been created in memory, but it has not got a value
let a = 1;
var b = 2;
=======
var y = 1;
console.log(y);

var y = 2;
console.log(y);
>>>>>>> 9b9b0b25b37834a83729024af515c68caab308d8
