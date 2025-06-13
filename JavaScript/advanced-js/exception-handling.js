try {
    foo(); // Error occurs here; execution stops; JS goes to catch block
    consolelog('after call to foo (within try block)') // This won't run because the above line throws an error
} catch(error) {
    console.log(error.message);
} finally {
    console.log('inside finally block');
}


console.log('after foo called');