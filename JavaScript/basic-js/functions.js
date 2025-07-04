console.log(sum(213, 313)); // This code works

//console.log(sum2(21,23));
// The above code gives an error because it cannot be called before the function is decalred

// Function declaration syntax
function sum(x, y) { // x and y are local variables of sum function
    var result = x + y; // result is a local variable
    return result;
};

var result = sum(12, 13); // result is a global variable
console.log(result);

// Function expression syntax
// (Much like variable declaration and assignment)
var sum2 = function(x, y) { // x and y are local to sum2 variable
    var result = x + y;
    return result;
};

console.log(sum(21, 34));