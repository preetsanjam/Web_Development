// Arithmetic operators
var x = 12, y = 13;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y); // Full division rather than returning the quotient
console.log(y / x);
console.log(x % y); // Returns remainder
console.log(y % x);


// Relational operators
var isBefore = 'hello' < 'hi'; // Compares the two strings alphabetically 
console.log(isBefore); // Returns a boolean value

var isBefore = 'hello' > 'hi';
console.log(isBefore);

var isGreater = 10 > 9;
console.log(isGreater);

console.log(x >= y); // False
console.log(x <= y); // True
console.log(x == y); // False
console.log(x != y); // True

console.log(1 == '1'); // Type unsafe equality operator
console.log(1 === 1); // Type safe equality operator
console.log(1 === '1');


// Logical operators 
var isRaining = true, goingByWalk = true, goingByCar = false;
var takeUmbrella = isRaining && goingByWalk; // AND operator 
console.log(takeUmbrella);   

var isRaining = true, goingByWalk = false, goingByCar = true;
var takeUmbrella = isRaining && goingByWalk;
console.log(takeUmbrella);  

var priceOfPhone = 42000, bankBalance = 60000, amIInterested = true;
var willIBuyPhone = priceOfPhone < bankBalance && amIInterested;
console.log(willIBuyPhone);

var priceOfPhone = 42000, bankBalance = 20000, freindBankBalance = 80000, amIInterested = true;
console.log(priceOfPhone < bankBalance || priceOfPhone < freindBankBalance); // OR operator 

console.log(!true); // Negation
console.log(!isRaining);


// Miscellaneous operators
var user_name = 'Sanjam', message = 'Good morning';
console.log(message + ' ' + user_name); // '+' acts as a concatenation operator 

console.log(typeof isRaining); // Evaluates to string "boolean"

var city = 'Bangalore';
var isTrafficHuge = city === 'Bangalore' ? 'Yes' : 'No'; // This works as if-else statement 
console.log(isTrafficHuge);

var city = 'Buffalo';
var isTrafficHuge = city === 'Bangalore' ? 'Yes' : 'No'; // This works as if-else statement 
console.log(isTrafficHuge);

console.log(1 + 2 + 3 * 4) // Associativity: 1 + 2 + 12 (L-R in case of '+' operator) --> 3 + 12 --> 15
console.log(1 + (2 + 3) * 4) // 1 + 5 * 4 --> 1 + 20 --> 21

