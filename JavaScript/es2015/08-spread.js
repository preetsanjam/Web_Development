const numbers = [56, 78, 3, 90, 34, 21]
const result = Math.max(...numbers); // Math.max() does not accept an array 
                                    // We use the spread operator for calling a function 
console.log(result);