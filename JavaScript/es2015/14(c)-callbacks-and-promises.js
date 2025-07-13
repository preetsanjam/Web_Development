const sum = (x, y,cb) => {
    setTimeout(() => { 
        cb(x + y);
    }, 2000);
    return; 
};

// Passing an anonymous function as a callback function
console.log(sum(10, 20, function (result) {
    console.log(result);

    sum(result, 30, function(result2) {
        console.log(result2);
    })
})); 
