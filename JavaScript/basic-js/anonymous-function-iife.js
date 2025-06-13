function wrapper() {
    var x =  100;

    const sum = function (x, y, cb) { // sum is a global variable
        var result = x + y;
        cb(result);
    };

    // Not an anonymous function
    /*
    function logResult(result) {
        console.log(result);
    } */

    // sum(10, 20, logResult);

    // Anonymous function
    sum(10, 20, function (result) {
        console.log(result);
    })
};

wrapper(); // wrapper function minimizes thh # of global function

// Immediately Invoked Function Expression (IIFE) 
(function (global) {
    var x =  100;

    const sum = function (x, y, cb) { // sum is a global variable
        var result = x + y;
        cb(result);
    };

    // Anonymous function
    sum(10, 20, function (result) {
        console.log(result);
    })
}) (window);

 
