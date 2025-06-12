## Notes

- **Hoisting** is a mechanism where functions and variable declarations are moved to the top of their scope before code execution. In other words, hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of the current scope (either global or function scope) before any code is executed. This means:
    - Variable declarations using var are hoisted to the top of their scope, but their initial values are not hoisted.
    - Function declarations are also hoisted, and their definitions are hoisted too.
    - Before any line of code is executed in JS (before it enters any scope), it first checks for declarations (variable declarations or function declarations) and it creates a memory for the variables but it does not assign any value to those variables.

        Example: 
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
        - `var x` is hoisted to the top (only the declaration).
        - The initial assignment `x = 1` stays in place.
        - So, when you run `console.log(x)` before the assignment, the variable exists but has the value `undefined`.
        - After assignment, `console.log(x)` prints `1`.
        
        Summary:
        - `var` declarations are hoisted, but their values are not.
        - `console.log(x)` before `x = 1` returns `undefined` because `x` exists but hasn’t been assigned yet.
        - This is not an error, because the variable `x` is already in memory due to hoisting.
    - Hoisting is a default behavior of moving declarations to the top of the current scope and applies to variable and function declarations. Functions defined using an expression is not hoisted.

        Example: 
        ```
        console.log( sum( 12, 13 ) );
        
        function sum( x, y ) {
            return x + y;
        }
        ```
        Execution flow:
        - The function `sum(x, y)` is hoisted — its entire definition is moved to the top of the code.
        - Then `console.log(sum(12, 13))` is executed.
        - `sum(12, 13)` returns 25.
        - `console.log()` prints 25.
         
- **Function call context:**
    - `this` keyword refers to an object that is executing the current piece of code in the current function.

        In a method (object function):
        ````
        const person = {
            name: "Sanjam",
            greet: function() {
                console.log(this.name);
            }
        };
        
        person.greet(); // 'this' refers to the 'person' object → Output: Sanjam
        ````

        In a regular function (non-method):
        ```
        function show() {
            console.log(this);
        }

        show(); // In non-strict mode, 'this' refers to the global object (window in browsers)
                // In strict mode ('use strict'), 'this' is undefined
        ```
    - The `window` object refers to a window in the browser and is automatically created from the browser. It is not the JavaScript object. JavaScript objects are string, array, etc.
- **Functions:** 
    - Functions are plain objects in JavaScript. But they are special objects in the sense that they can be called and the statements that are part of their body can be executed.
    - Functions are **first-class citizens**. They have similar functionality as objects such as they can be assigned to variables, passed as arguments, or returned from a function.
    - What does "functions are first-class citizens" mean?
    
        It means:

        - Functions can be assigned to variables.
        - Functions can be passed as arguments to other functions.
        - Functions can be returned from other functions.
        - Functions can be stored in data structures.

        In short, functions are treated like any other value or object. 
    - The `instanceof` operator is used to check the type of an object at runtime. It returns a boolean value true if the object is an instance of a specific class and false otherwise.  
    - Three important methods in functions:
        1. `call()` - The `call()` method is a predefined method in JavaScript. It can be used to invoke/call a method with an owner object as an argument/parameter. Using the `call()` method, an object can use a method that belongs to another object. 

            In other words, the `call()` method allows us to call a function with a specified  `this` value and arguments provided individually.
        
            The syntax of `call()` method is to pass in the context and the list of arguments that are passed just like the calling function.

            **Example:**
            ```
            function sum( x, y ) {
                return x + y;
            };
            
            console.log( sum.call( 1, 2 ) ); // Returns `undefined`
            ```
            `sum.call(1, 2);` is equivalent to `sum(2);` because `.call(thisArg, arg1, arg2, ...)` calls the function with:
            
            - `thisArg = 1` (but unused in `sum`)
            - `arg1 = 2` (becomes `x`)
            - `arg2 = undefined` (because you only passed one argument) 

            So the function receives:
            ```
            x = 2
            y = undefined
            ```

            And
            ```
            2 + undefined = NaN
            ```

        2. `apply()` - The `apply()` method calls the defined function with a given `this` value and arguments provided as an array or an array-like object.

            **Example:**
            ```
            function sum() {
                for (var i = 0, result = 0; i < arguments.length; i++) {
                result = result + arguments[i];
                }
                return result;
            }

            console.log( sum.apply(  [ 1, 2 ], [ 3, 4 ],[ 5, 6 ] ) ); // Returns 7
            ```
            `.apply()` accepts only two arguments:
            ```
            func.apply(thisArg, argumentArray)
            ```
               
            - `thisArg`: the value to use as `this` inside the function (`[1, 2]` in our case)
            - `argumentArray`: an array of arguments to pass to the function (`[3, 4]` is valid)

            This line:
            ```
            sum.apply([1, 2], [3, 4], [5, 6])
            ```
            …will throw a TypeError or ignore the extra argument depending on the JavaScript engine.
        
        3. `bind()` - The `bind()` method allows us to create a new function from an existing function, change the new function's context and provide any arguments you want the new function to be called with.

            ---
            NOTE:
            
            The `call()`, `bind()` and `apply()` methods are the functions that help us change the context of the `this` keyword that is present inside the invoking function. 

            ---

- JavaScript is also known as a **prototype-based language**, meaning object methods and properties can be shared through generalized objects that have the capability to be cloned and extended.
- **Object prototype:**
    - The **prototype object** is a special enumerable type of object, to which additional properties can be added that can be shared across all instances of its constructor function.  
    - The `Object.getPrototypeOf()` is a static method that returns the prototype i.e. the value of the internal [[Prototype]] property of that particular object.  
    - In JavaScript, `__proto__` is a method to inherit properties from an object. It is a property of `Object.prototype` which is an accessor property that reveals the [[Prototype]] of the object through which it is accessed.
    - The `Object.setPrototypeOf()` method sets the prototype that is internal [[Prototype]] property of a particular object to another object or null.
    - In JavaScript, all objects inherit methods and properties from a prototype.
    - Objects inherit from other objects.  
    - Prototype inheritance is the linking of prototypes of a parent object to a child object to share and utilize the properties of the parent class using the child class.
    - Every object has a built-in property called its prototype. The prototype itself is an object and has its own prototype called a **prototype chain**. The prototype chain ends when we reach a prototype that has null for its own prototype. 
    - **Constructor:**
        - A **constructor** is a special function that helps create and initialize an object instance of a class. In JavaScript, a constructor gets called when an object is created using the `new` keyword. 
        - The main goal of a constructor is to create a new object and set values for any current object properties. 
        - **A `new` keyword is used to create an instance of an object** that has a constructor function. When the constructor function with a `new` operator is called, a new empty object is created.
        - When we call any function with `new` operator, it creates three functions
            
            1. An empty object is created. 
            2. The newly created object is passed as a call context.
            3. The newly created object is returned. In other words, it returns the context.
        - There are two types of constructors: **built-in constructors** such as array and object, and **custom constructors** which specify properties and methods for our own type of object.
- The `filter()` method returns a new array which is a subset of the array it is called on. It does so only if the condition in the function defined in the filter method is satisfied.  

    The `filter()` method is supposed to return true or false. If a function returns `true` for any particular iteration, that iteration's item is returned in the resulting array. If a function returns `false`, that iteration's item is not returned in the resulting array.
- **XML** - Extensible Markup Language is a W3C recommendation designed to hold data and not to display data. It is a markup language that specifies a set of rules for encoding data in a format that is both human and machine-readable.
- **JSON** 
    - JavaScript Object Notation (JSON) is language-independent, lightweight data-interchange format. It is easy to understand and was originally created to carry the structured data that could be used in JavaScript.
    - JSON is used to transmit data between a server and a client.
    - Despite its name, it’s not limited to JavaScript—it’s supported by most programming languages.
    - It's based on key-value pairs and supports arrays and nested objects.


            
         