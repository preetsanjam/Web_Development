// NUmber class method is a wrapper over the primitive number type

//console.log(Number.parseInt(3.56)); This parses the number as an integer
// Usually, we do not pass numbers in parseInt()
// Instead, parseInt() is used to parse a string that hold a number and convert it into an integer

console.log(Number.parseInt('3.56', 10)); // Second argument is the decimal numeral system which has a base of 10
console.log(Number.parseInt('abcdef', 16));

// parseFloat() preserves the decimal values
console.log(Number.parseFloat('3.56', 10));  

