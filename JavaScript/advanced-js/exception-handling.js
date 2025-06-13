try {
    foo();
    consolelog('after call to foo (within try block)')
} catch(error) {
    console.log(error.message);
}


console.log('after foo called');