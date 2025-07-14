const sum = (x, y,) => {
    const promise = new Promise((resolve, reject) => { 
        if(typeof x !== 'number' || typeof y !== 'number') {
            return reject(new Error('Both arguments must be numbers'));
        }

        // All asynchronous operations must happen within a function passed to the Promise constructor
        setTimeout(() => { 
            resolve(x + y);
        }, 2000);
    }); 
    
    return promise; 
};

const promise = sum(10, 20);
promise
    .then( (result) => {
        console.log(result)
        return sum(result, 30); 
        })
    .then((value) => console.log(value)); // Here, value is not a promise 


const sumResult = sum(10, 'Hello');
sumResult
    .then((result2) => console.log(result2))
    .catch(error => console.log(error.message));

