// We're not declaring a function
// We're capturing the return value of an IIFE
const someVariable = (function () {
    return 100;
}) ();

console.log(someVariable);

// Function declaration syntax
const sum = function(x, y) {
    var result = x + y;
    return result;
};

console.log(sum(10, 20));