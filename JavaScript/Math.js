console.log(Math);

console.log(Math.random());

console.log(Math.min(50, 56, 21, 9, 88, 45, 66, 69, 2));
console.log(Math.max(50, 56, 21, 9, 88, 45, 66, 69, 2));

// Math.max() and Math.min() do not work directly on arrays 
var numbers = [50, 56, 21, 9, 88, 45, 66, 69, 2];
console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));