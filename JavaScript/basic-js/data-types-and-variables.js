// Data types: number (includes int and float), boolean, string
var x = 1, y; // y has a special value called undefined 
var z = 2.7117;
console.log( x );
console.log( y );

// number
console.log(typeof 2); // typeof operator evaluates to a string. This returns a "number" string
console.log(typeof x);
console.log(typeof z);

// boolean
var isItRainung = true; isItPouring = false;
console.log(isItRainung);
console.log(isItPouring);
console.log(typeof isItRainung); // "boolean" string
console.log(typeof isItPouring);

// string
var name = "John", message = "Good Morning";
console.log(name);
console.log(typeof message); // "string"
console.log(message.length); // Returns the number of characters
console.log(message + " " + name); // Concat strings