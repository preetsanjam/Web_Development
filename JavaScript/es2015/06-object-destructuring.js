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
}

// One approach to retreive 'name' from object 'john' 
// const name = john.name;

// Another approach
const {name } = john;  // The variable name has to match with the property name in the object
console.log(name);

// Renaming 'age' to new variable 'yearsOld'
const {age: yearsOld} = john;
console.log(yearsOld);

// Accessing 'city' within 'address' object and renaming the variable
// Using object destructuring syntax
const {address: {city: residence}} = john;
console.log(residence);

// Accessing email ID from array 'emailIds'
// Using array destructuring 
const {emailIds: [primaryEmailID]} = john;
console.log(primaryEmailID);

// All the above syntaxes can be clubbed into one
// const {name, age: yearsOld, address: {city: residence}, emailIds: [primaryEmailId] } = john; 
// console.log(name, yearsOld, residence, primaryEmailId);