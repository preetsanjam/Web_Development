## Notes

- `let` vs `var`: 
    
    1. Variables declared with the `let` keyword must be declared before use and cannot be redeclared. Variables declared with the `var` keyword can be redeclared multiple times.

    2. Variables declared with `var` are function-scoped, whereas variables declared with `let` are block-scoped.

    3. Variables declared with `var` are hoisted, whereas those declared with `let` are not.

    4. Variables declared with `let`, though they may be global, are not created as properties of the `window` object, whereas variables declared with `var` are created as properties of the `window` object. 

- `let` vs `const`:

    Unlike the variables declared with the `let` keyword, whose value can be updated, the value of a variable declared with the `const` keyword cannot be updated. Also, the value of a `const` variable needs to be assigned on declaration.  

- **Template strings** in ES6 allow us to create templates for how we want our variables and string literals to be arranged for display on the browser. This is done with the help of backticks (`).  
- **Default arguments** are a new feature in ES6, which allows us to define a default value of an argument which will be considered in case the argument value is not defined in the function call.
- **Array destructuring** aids us in creating variables with the individual elements of an array. It is often used in scenarios where we need to isolate the elements of an array before further processing. It is useful when we are creating too many variables from an array.

    **Skipping items:** If we want to skip an item during the destructuring process, we can add a comma in the location of the element we want to skip. The number of commas added is equal to the number of elements skipped. 
- **Object destructuring** helps us to create variables with the individual properties in an object.

    **Object destructuring syntax:** We use open and close braces "{}" for destructuring objects in ES6. We can also use these to destructure the nested objects and arrays within an object. 

- **Rest operator:**  The rest operator "..." allows us to call a function with any number of arguments and then access the set of arguments as an array in the program. 

    **Rest operator position:** Similar to the position in function arguments, the rest operator in array destructuring has to be placed at the end of the array destructuring code. Doing otherwise generates an error.  

    **Object destructuring:** If any part of the object is accessed even partially, the remaining part of the object property/array/nested object will not be destructured by the "..." operator.  

- **Spread operator:** The spread operator is similar to 