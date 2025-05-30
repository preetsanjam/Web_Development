function foo() { // function foo has no argument
    console.log('foo was called');
}

foo('hello'); // function foo is invoked even though it does not expect any argument  

function xoo(x) { // function xoo has one argument
    console.log(x);
    console.log('xoo was called');
}

xoo('hello', 'world'); // function xoo is invoked even though it expects only one argument  

// Remark: 
// No relationship between # of arguments declared in the function and # of arguments passed when invoking the function.

function aaa(x, y, z) {
    console.log(x, y, z);
    console.log('aaa was callled');

    console.log(arguments); // arguments is an object data type
    console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
    console.log(arguments.length); // Length function contains the # of arguments passed to the function call
}

aaa('hello', 'world', 'Good', 'morning');