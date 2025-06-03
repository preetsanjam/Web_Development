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
console.log(days);
console.log(removed_day);