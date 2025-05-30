const sum = function (x, y, cb) {
    var result = x + y;
    cb(result);
};

// Not an anonymous function
/*
function logResult(result) {
    console.log(result);
} */

// sum(10, 20, logResult);

// Anonymous function
sum(10, 20, function (result) {
    console.log(result);
})