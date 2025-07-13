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
    
    return Promise; 
};

