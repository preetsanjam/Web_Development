const sum = (x, y) => {
    setTimeout(() => { // setTimeout() is a non-blocking method
        return x + y;
    }, 2000);
    return; 
};

console.log(sum(10, 20)); // Returns undefined

// Remarks:
// The sum() function makes a request to the browser to execute the passed function after 2 sec
// We do not get the result; the browser gets the result