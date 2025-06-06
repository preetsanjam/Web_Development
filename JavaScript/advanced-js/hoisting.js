console.log(x); // Returns undefined; We're accessing the variable before it is declared
var x = 1;
console.log(x);

console.log(y); // Returns undefined; We can access the value of y, but its value is undefined
var y = 2; // Value is assigned here though variable is created earlier
console.log(y); // Returns 2
