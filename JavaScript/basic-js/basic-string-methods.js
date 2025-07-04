// A string is immutable. We cannot change the value of a variable
var quote = 'With great power comes great responsibility';

var pieceOfTheQuote = quote.substring(10, 20); // Start from index 10 and goes up to index 20, but does not include index 20
console.log(pieceOfTheQuote);

var replacedString = quote.replace('responsibility', 'electricity bill');
console.log(quote);
console.log(replacedString);

var fruits = 'apples,bananas,oranges';
var fruitArray = fruits.split(','); // split() method splits a string into an array of substrings based on the delimiter
console.log(fruitArray);

var firstIndex = quote.indexOf('great');
var lastIndex = quote.lastIndexOf('great');
var anotherIndex = quote.indexOf('greatest');
console.log(firstIndex); // Returns the index of the first occurrence of the substring 'great'
console.log(lastIndex); // Returns the index of the last occurrence of 'great'
console.log(anotherIndex); // Not in index. Returns -1