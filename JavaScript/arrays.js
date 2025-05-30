var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
];

// Accessing third item in the array
console.log(days[2]);

// Changing the value in the array
days[2] = 'Wed';

// Adding a value
days[5] = 'Saturday';

days[10] = 'A day on Mars';

console.log(days);
console.log(days[8]); // Returns undefined
console.log(days[11]); // Returns undefined

console.log(days.length);

// Array of different data types
var dummyArray = [
    'hello',
    1,
    true,
    null
];

console.log(dummyArray);

// Every time in this array is itself an array
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14] // Each array item can have different number of elements
];

console.log(matrix[1][2]);
console.log(matrix[2][5]);