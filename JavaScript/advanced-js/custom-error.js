function sum(x, y) {
    if(typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }

    // Custom error using Error object
    throw new Error("Only numbers are allowed as arguments");
};

try {
    console.log(sum(23, 'hello'));
} catch(error) {
    console.log(error.message)
} finally {
    console.log('inside finally block')
}
