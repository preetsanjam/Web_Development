var isBefore = 'hello' < 'hi'; // Compares the two strings alphabetically 
console.log(isBefore); // Returns a boolean value

var isBefore = 'hello' > 'hi';
console.log(isBefore);

var isGreater = 10 > 9;
console.log(isGreater);

var x = 12, y = 13;

console.log(x >= y); // False
console.log(x <= y); // True
console.log(x == y); // False
console.log(x != y); // True

console.log(1 == '1'); // Type unsafe equality operator
console.log(1 === 1); // Type safe equality operator
console.log(1 === '1');