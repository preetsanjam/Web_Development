function greeting(message = 'Hello', name = 'World') { // 'Hello' are 'World' are default values  
    return `${message} ${name} !`;
} 

// Both arguments passed
console.log(greeting('Good morning', 'John'));

// When the second argument is not passed, default value 'undefined' is returned
console.log(greeting('Good morning'));

// No argument passed
console.log(greeting());

// First argument not passed
console.log(greeting(undefined, 'John'));