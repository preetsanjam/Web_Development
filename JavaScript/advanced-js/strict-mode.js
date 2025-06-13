"use strict";

// One of the use cases:
// It won't allow us to create variables without the 'var' keyword
// In other words, we are not allowed to create variables implicitly (i.e., without using `var`, `let`, or `const`)
// In strict mode, all variables must be explicitly declared

function foo() {
    var x = 1; // x is a local variable 
    y = 2; // Without 'var' keyword, y is a global variable 
};

foo();

// console.log(x); Returns error because the scope of variable x lies within the function foo

console.log(y); // No error if the scope of variable y is global
                // However, in 'strict mode', the use of `var` keyword is mandatory  
                // The line y = 2; attempts to create a global variable implicitly, which is forbidden in strict mode.
                // As a result, JavaScript throws a `ReferenceError: y is not defined` at runtime.