// NUmber class method is a wrapper over the primitive number type

//console.log(Number.parseInt(3.56)); This parses the number as an integer
// Usually, we do not pass numbers in parseInt()
// Instead, parseInt() is used to parse a string that hold a number and convert it into an integer

console.log(Number.parseInt('3.56', 10)); // Second argument is the decimal numeral system which has a base of 10
console.log(Number.parseInt('abcdef', 16));

// parseFloat() preserves the decimal values
console.log(Number.parseFloat('3.56', 10));  

// toFixed() method - useful for currency values
var wrappedNumber = new Number(3.5678); // new Number(3.5678) creates a Number object
console.log(wrappedNumber.toFixed(2)); // toFixed(2) formats it to 2 decimal places

// We can directly call toFixed() on a primitive number
// JavaScript automatically boxes the primitive into a Number object so that methods like toFixed() can be used
// Example: 
console.log(3.5678.toFixed(3));