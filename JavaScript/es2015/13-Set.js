let primeNumbers = new Set([2, 3, 5, 7, 11, 13]);

console.log(primeNumbers.size);

primeNumbers.add(17);
console.log(primeNumbers);

primeNumbers.add(7);
console.log(primeNumbers); // 7 is not added since it is already in the `Set`

primeNumbers.delete(5);
console.log(primeNumbers);

// Checking whether an item exits
console.log(primeNumbers.has(11));
console.log(primeNumbers.has(8));