//Global variable
var global_x = 1; 
console.log('Outside of function, global_x = ', global_x);

// Global variable z
var z = 5;

// Defining a function
function foo() {
    var local_foo_x = 2;
    
    // Local variable z    
    var z = 6;
    
    console.log('Inside foo, local_foo_x = ', local_foo_x);
    console.log('Inside foo, global_x = ', global_x);
    
    // Local function
    function bar() {
        var local_bar_x = 3;

        // We can declare a variable without the var keyword
        // It is a global variable  
        local_bar_y = 4;

        console.log('Inside of bar, global_x = ', global_x);

        // We can access any variable declared within the scope of foo function
        console.log('Inside of bar, local_foo_x = ', local_foo_x);
        console.log('Inside of bar, local_bar_x = ', local_bar_x);
        console.log('Inside of bar, local_bar_y = ', local_bar_y);
        console.log('Inside of bar, z = ', z);
    }

    bar();

    // The following code throws an error
    // A variable declared in the inner function cannot be called in the outer function 
    // console.log('Inside of foo, local_bar_x = ', local_bar_x);

    console.log('Inside of foo, local_bar_y = ', local_bar_y);
}

// Calling the function
foo();

// The following code throws an error because local_foo_x is defined inside a function
// console.log('Outside of foo, local_foo_x = ', local_foo_x);

console.log('Outside of functions, local_bar_y = ', local_bar_y);
