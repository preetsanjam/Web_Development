// Function declaration syntax
function sum(x, y) { // x and y are local variables 
    var result = x + y; // result is a local variable
    return result
}

var result = sum(12, 13); // result is a global variable
console.log(result);

// Function expression syntax
// (Much like variable declaration and assignment)