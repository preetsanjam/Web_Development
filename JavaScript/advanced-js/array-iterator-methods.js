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