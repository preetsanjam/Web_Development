//Global variable
var global_x = 1; 
console.log('Outside of function, global_x = ', global_x);

// Defining a function
function foo() {
    var local_foo_x = 2;
    console.log('Inside foo, local_foo_x = ', local_foo_x);
    console.log('Inside foo, global_x = ', global_x);
}

// Calling the function
foo();

console.log('Outside of foo, local_foo_x = ', local_foo_x);