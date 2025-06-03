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

var numbers = [20, 60, 40, 65, 80, 8, 22, 30, 200, 2, 3500];
numbers.sort(function(x, y) {
    return  x - y; // Sorts in ascending order; y - x sorts in descending order
});
console.log(numbers);

// Array of objects 
var projects = [
    {hours: 20, name: 'Project 1'},
    {hours: 60, name: 'Project 2'},
    {hours: 40, name: 'Project 3'}, 
    {houes: 65, name: 'Project 4'},
    {hours: 80, name: 'Project 5'}
];

projects.sort(function(x, y) {
    return x.hours - y.hours;
});

console.log(projects);

// Push adds an element to the end of an array
days.push('Saturday'); // Adds Saturday to the end of array
days.push('Sunday');
days.sort();
console.log(days); // Returns Wednesday as the last element

// Pop removes an element from the end of an array
var removedDay = days.pop() // Removes Wednesday
console.log(days); 
console.log(removedDay);

days.unshift('Holiday'); // Adds an element at beginning of an array 
days.shift(); // Removes the first element
var removed_day = days.shift() // Removes another element from the beginning of an array
console.log(removed_day);
console.log(days);

days.push('Friday', 'Wednesday'); // push() method accepts multiple arguments
console.log(days);

// 1. splice() - Removes elements
days.splice(2, 3); // Starting from index 2, remove three elements
console.log(days);

// 2. splice() - Adds elements
days.splice(2, 0, 'Jan', 'Feb', 'Mar'); // Starting from index 2, adds elements without removing any
console.log(days);

// slice() creates a copy
var slicedDays = days.slice(2, 6); // Starting from index 2, go up to index 6 but exclude index 6 
console.log(slicedDays);

// Remarks:
// days.slice(2); This will start from index 2 and goes up to the end of the array
// days.slice(0); This will make a copy of an array as it starts from index 0 and goes up to the end of an array
