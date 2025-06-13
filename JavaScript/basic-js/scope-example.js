function f() {

    function g() {
        x = 1;
        console.log(x);
    }

    console.log(x);  // This line is inside f()
    g();             // g() is called from inside f()
}

f();  // f is executed first!

// Execution Order:
// 1. f() is called — so function f starts running.
// 2. Inside f(), console.log(x) runs first, but x hasn't been defined yet → ⚠️ Error.
// 3. Only after that, g() is called from within f().
// 4. So, g() runs only after console.log(x) inside f().
