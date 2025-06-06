## Notes

- **Hoisting** is a mechanism where functions and variable declarations are moved to the top of their scope before code execution. In other words, hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of the current scope (either global or function scope) before any code is executed. This means:
    - Variable declarations using var are hoisted to the top of their scope, but their initial values are not hoisted.
    - Function declarations are also hoisted, and their definitions are hoisted too.
    - Before any line of code is executed in JS (before it enters any scope), it first checks for declarations (variable declarations or function declarations) and it creates a memory for the variables but it does not assign any value to those variables.
    ```
    console.log(x); // Returns undefined
    var x = 1;
    console.log(x); // Returns 1
    ```
    JavaScript interprets the code like this before execution:
    ```
    var x;            // Declaration is hoisted
    console.log(x);   // x exists but hasn't been assigned yet → undefined
    x = 1;            // Now x is assigned the value 1
    console.log(x);   // Outputs: 1
    ```
    What Happens?
    - `var x`; is hoisted to the top (only the declaration).
    - The initial assignment `x = 1`; stays in place.
    - So, when you run `console.log(x)`; before the assignment, the variable exists but has the value `undefined`.
    - After assignment, `console.log(x)`; prints `1`.
    <br />Summary:
    - `var` declarations are hoisted, but their values are not.
    - `console.log(x)`; before `x = 1`; returns `undefined` because `x` exists but hasn’t been assigned yet.
    - This is not an error, because the variable `x` is already in memory due to hoisting.