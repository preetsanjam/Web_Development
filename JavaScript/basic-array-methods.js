var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
];

days.sort(); // sort is a method since array is an object

days.reverse(); // Sorts in reverse alphabetical order
console.log(days);

// Searching index value of 'Monday'
console.log(days.indexOf('Monday')); // Returns 3

console.log(days.indexOf('Saturday')); // Not in index; Returns -1