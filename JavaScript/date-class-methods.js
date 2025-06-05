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