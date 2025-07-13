const sum = (x, y,cb) => {
    setTimeout(() => { 
        cb(x + y);
    }, 2000);
    return; 
};

function printResult(result) {
    console.log(result);
}

// Passing printResult as a callback function
console.log(sum(10, 20, printResult)); 

// Flow of execution:
// Sum function (line 13) gets called; printResult() function was passed as a reference 
// cb is the printResult() function
// setTimeout is called; this function is scheduled to be executed after 2 sec


