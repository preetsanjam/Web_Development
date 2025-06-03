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