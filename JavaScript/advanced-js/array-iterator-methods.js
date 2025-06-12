// Number of items an iterator function is called is equal to the number of items in an array

// forEach()

// Array of objects
var days = [
    {day: 'Sunday', hours: 2},
    {day: 'Monday', hours: 8},
    {day: 'Tuesday', hours: 7},
    {day: 'Wednesday', hours: 10}
]

days.forEach(function(item) {
    console.log(item)
});

var scores = [
    { subject: 'Math', score: 89 },
    { subject: 'Programming', score: 100 },
    { subject: 'Physics', score: 95 },
    { subject: 'Chemistry', score: 75 },
    { subject: 'History', score: 59 },
];

scores.forEach(function(x) {
    console.log(x)
});

// filter 
// It is supposed to return true or false

var resultDays = days.filter(function(item) {
    // return true; Returns an array with all items
    // return false; Returns an empty array
    return item.hours >= 8; // Returns true for 'Monday' and 'Wednesday'
                            // Hence, both items are picked in the interation 
});

console.log(resultDays);