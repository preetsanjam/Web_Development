// 1. Pass items of an array as arguments when calling a function
const numbers = [56, 78, 3, 90, 34, 21]
const result = Math.max(...numbers); // Math.max() does not accept an array
                                     // It accepts comma-separated values
                                     // We use the spread operator for calling a function 
console.log(result);

// Array spread: sConcatenate two arrays
const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // Spread out items in arrays into comma-separated values
console.log(arr3);

// 2. Object spread
const john = {
    name: 'John',
    age: 32,
    emailIds: [
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address: {
        city: 'Bangalore',
        pinCode: 560100 
    } 
};

const johnCopy = { // Creates a shallow copy
    ...john
};

// Primitive value change
johnCopy.name = 'Jonathan';

// Non-primitive value change
johnCopy.emailIds.push('john@xyz.com'); 

console.log(john);
console.log(johnCopy);
