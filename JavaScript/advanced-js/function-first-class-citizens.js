// Example 1
function foo(callback) { // foo expects another function as an argument
    var x = 10, y = 20;
    var z = x + y;
    callback();  // callback is nothing but function bar

    function retFn() {
        console.log('retFn is called');
    }

    return retFn;
};

function bar() {
    console.log('bar is called')
};

var resultFn = foo(bar); // foo(bar) means passing function bar to function foo
resultFn(); // Calling the function returned from foo


// Example 2
// Store a function in a variable
var name = function() {
    console.log('Sanjam!');
}

// Pass the function as an argument
function greetings(callback) {
    console.log('Good Morning,')
    callback(); // Actually calling the passed-in function: name()
} 

// Call the greet function and pass sayHello
greetings(name);


// Example 3
function f(g) {
    console.log(g(12, 12));
}

var sum = function(x, y) {
    return x + y; 
};

f(sum);





