// Under what situations the rest operator can used?

// 1. When declaring a function's arguments

// Rest operator groups the remaining arguments into an array and assigns to 'others' variable
// It can appear only at the end
function sort(x, y, ...others) { 
    console.log(x);
    console.log(y);
    console.log(others);
}

sort(14, 78, 45, 10, 67);

// Groups all arguments passed to a function into an array
// It is so because the rest operator is the only argument 
function foo( ...numbers) {
    console.log(numbers);
    return numbers.sort();
}

const result = foo(14, 78, 45, 10, 67);
console.log(result);

// 2. When doing array destructuring 
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

const[first, second, ...restOfDays] = days; // '...restOfDays' creates an array of remaining items
                                            // This array is not destructured
                                            // Use case: We can use this array later 
console.log(first, second, restOfDays);

// 3. When doing object destructuring

