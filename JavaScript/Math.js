console.log(Math);

console.log(Math.random());

console.log(Math.min(50, 56, 21, 9, 88, 45, 66, 69, 2));
console.log(Math.max(50, 56, 21, 9, 88, 45, 66, 69, 2));

// Math.max() and Math.min() do not work directly on arrays 
var numbers = [50, 56, 21, 9, 88, 45, 66, 69, 2];
console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));

// Ceiling value
console.log(Math.ceil(4.5));
console.log(Math.ceil(4));

// Floor value
console.log(Math.floor(4.5));
console.log(Math.floor(3));

// Absolute value
console.log(Math.abs(-34));

// Power of
console.log(Math.pow(3, 4)) // 3 raise to the power 4

// Rounding off
console.log(Math.round(3.6));
console.log(Math.round(3.4));