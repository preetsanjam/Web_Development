function foo(callback) {
    var x = 10, y = 20;
    var z = x + y;
    callback();

    function retFn() {
        console.log('retFn is called');
    }

    return retFn;
};

function bar() {
    console.log('bar is called')
};

var resultFn = foo(bar);
resultFn();


function f(g) {
    console.log(g(12, 12));
}

var sum = function(x, y) {
    return x + y; 
};

f(sum);





