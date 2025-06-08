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


function f(g) {
    console.log(g(12, 12));
}

var sum = function(x, y) {
    return x + y; 
};

f(sum);





