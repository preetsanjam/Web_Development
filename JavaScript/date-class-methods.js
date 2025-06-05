var today = new Date(); // Here, Date() is a class and we build an object of that class
console.log(today);

var melleniumDate = new Date(2000, 0, 1); // Format: YYYY-MM-DD; Months are zero-indexed; 0 represents Jan
console.log(melleniumDate); 

today.setDate(today.getDate() + 1); // Returns the next day
console.log(today);

var July31 = new Date(2025, 6, 31);
console.log(July31);

July31.setDate(July31.getDate() + 1); // Returns Aug 1
console.log(July31); 

// Getters
var year = today.getFullYear();
console.log(year); 

var month = today.getMonth();
console.log(month);

var day = today.getDay();
console.log(day);

var hour = today.getHours();
console.log(hour);

var minute = today.getMinutes();
console.log(minute);

var second = today.getSeconds();
console.log(second);

var dayOfWeek = today.getDay(); // Sunday is 0, Monday is 1 and so on
console.log(dayOfWeek);

// Setters
today.setFullYear(2024);
today.setMonth(0); // Jan is 0
today.setDate(1);
today.setHours(2);
today.setMinutes(3);
today.setSeconds(4);

console.log(today);
