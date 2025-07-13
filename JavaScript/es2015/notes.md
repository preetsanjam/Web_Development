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

- **Spread operator:** The spread operator is similar to but different from the rest operator. It is an overload of the rest operator, i.e., '...' symbol.

    Unlike the rest operator, the spread operator is used when accepting inputs for a function via arguments. 

    We use the rest operator when we are accepting an argument, whereas we use the spread operator when passing arguments.

    The spread operator is used to make a copy of an object we want to be duplicated. It creates a shallow copy of the original object. 

- **Classes in JavaScript:** Similar to classes in other programming languages such as Java, classes in JavaScript act as a blueprint for objects having a set of properties and methods.

- **Objects in JavaScript:** An object is an instance of a class that contains all properties and methods that exist in the class but with defined values and functionalities. Objects are created using the `new` keyword.

    **Constructors** are specialized methods that allocate memory space and values to the properties of the object on creation. In JavaScript, the `constructor()` method is defined inside a class.

    In JavaScript, we can have **one constructor per class**.

- **Inheritance in JavaScript:** Similar to Java, JavaScript also uses the `extends` keyword.
- **`super` keyword:** The parent class is also known as the super class. When referring to the parent class properties, methods or constructors, we can use the `super` keyword instead, which will point to the direct parent class of the current class.
- **Iterables** are objects that can be iterated through, for example, an array or a string, where elements are maintained in a particular order. 
- **Map:** `Map` objects are a set of key-value pairs, where the key can be of any datatype. The key in a `Map` object can only occur once, thereby making it a useful construct in accessing the uniqueness of elements. 
    
    There is a sequence of key-value pairs.

    The key can be of any datatype.

- **Set in JavaScript:** A JavaScript `Set` is a collection of unique values, meaning each value can only occur once. `Set` objects can hold any value of any data type and they are iterable.   

- A **callback function** is passed as an argument to another function and is later executed within that function to accomplish a particular task or action.
- The `setTimeout()` method is a global method that allows the scheduling of a timer to trigger the execution of a specified function once the set time delay has elapsed.

    It is a request made to the browser to call the passed function after a specified time.

- **Non-blocking methods**  execute asynchronously, permitting further operations to continue without waiting for their completion, which means that the program does not have to execute in a step-by-step manner. 
- 'Callback hell' is the main disadvantage of callback. It is resulted from nested callbacks and can decrease code readability and maintainability.
- A `Promise` is a special JavaScript object that acts as a container for future values and is used to handle asynchronous operations. It is created using a `Constructor` function. 

    The `Promise` object takes two parameters: `resolve` for success and `reject` if an error occurs.

    A `promise` is created using the `Promise` constructor.

    Syntax:
    ```
    const promise = new Promise(function(resolve, reject) {
        // Statements to perform;
    });
    ```

    A `Promise` can have one of the three states: pending, fulfilled and rejected. The `Promise` begins with a pending state, i.e., the process is not complete. The `Promise` ends in a fulfilled state if successful and a rejected state if an error occurs.

    The `Promise` can be handled using `then()`, `catch()` and `finally()` methods. The `then()` method is called when a `promise` is either resolved or rejected. The `catch()` method is called when a `promise` is either rejected or some error occurs in execution.   
