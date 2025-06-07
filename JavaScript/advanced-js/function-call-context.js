// Whenever we call a function, there is a context set-up within that function
// Every function call has an associated context 

function foo() {
    console.log(this);
};

foo();  // In non-strict mode, 'this' refers to the global object (window in browsers)
        // In strict mode ('use strict'), 'this' is undefined

var john = {
    name: 'John',
    getName: function() {
        console.log(this); // prints the `john` object because the function is called as a method of `john`
        return this.name;
    }
};

console.log(john.getName());

