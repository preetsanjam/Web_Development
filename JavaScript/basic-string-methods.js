// A string is immutable. We cannot change the value of a variable
var quote = 'With great power comes great responsibility';

var pieceOfTheQuote = quote.substring(10, 20); // Start from index 10 and goes up to index 20, but does not include index 20
console.log(pieceOfTheQuote);