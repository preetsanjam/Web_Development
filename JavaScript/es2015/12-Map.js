const numbers = new Map([[1, 'one'], [2, 'two'], [3, 'three']])

console.log(numbers.size);

console.log(numbers.entries()); // entries() is the method of the Map class

// Printing only the keys
console.log(numbers.keys());

// Printing only the values
console.log(numbers.values());

// Adding a key-value pair
numbers.set(40, 'forty');
console.log(numbers);

// See what is stored against key '3'
// Acts as a lookup
console.log(numbers.get(3));

// Deleting a key-value pair
numbers.delete(2);
console.log(numbers);

// numbers.clear() will remove all key-value pairs

for(let [key, value] of numbers) {
    console.log(`${key} = ${value}`);
};