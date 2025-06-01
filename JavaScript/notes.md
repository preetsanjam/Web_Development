## **Notes** ##

- JavaScript is a scripting language, which means it is loosely defined. 
- A loosely typed language is a programming language where there is no need for variables to be defined. It is easier to debug and test your code using loosely typed languages.  
- Compile time errors are detected by the compiler and occur when we violate the syntax rules. It indicates that we need to fix the error before compiling the code.
- JavaScript is an interpreted language, not a compiled language. The browser picks up the Javascript code line by line. It is not compiled and translated to some other form.
- **Main features of JavaScript:** 
    - JavaScript is interpreted line by line.
    - We can build the backend of an application using JavaScript.
    - JavaScript is the only language for writing scripts for the frontend of an application.
- `console.log()` is a built-in JavaScript function used to print messages to the console (usually the browser’s developer tools or terminal). 
    - `console` --> JavaScript object for accessing the console
    - `.log()` --> Method that prints a message
- In JavaScript, a primitive data type is data that is not an object and has no methods or properties. A few primitive data types include number, string, boolean, NULL, etc.
- A variable that is declared and not assigned a value is of type 'undefined'.
- 'Undefined' is a data type by itself. It means a variable has been declared but has not been assigned a value.
- In JavaScript, NULL is a special value that refers to an empty or unknown value. It is an object and JavaScript never sets a value to NULL.
Node.js is an open-source, cross-platform JavaScript framework for backend development. It is a runtime environment which developers use to create server-side web applications. 
- 'npm' stands for Node Package Manager. It is the world's largest Software Registry containing over 800,000 code packages. 'npm' is the default package manager for the JavaScript runtime environment Node.js. 
- V8 is a free and open-source JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers. V8 engine directly converts scripts to machine code without building any intermediate code, making it different from other JS engines. 
- In JavaScript, non-primitive data types are derived from primitive data types. These are called reference types because they refer to objects. The data type values can be altered hence known as mutable data types.  
- There is no explicit data typing in JavaScript.
- The `typeof` operator in JavaScript is designed to return a string that represents the data type of a given operand. Regardless of the operand's actual type, the `typeof` operator will always evaluate to one of the following strings:
"string", "number", "boolean", "object", "function", "undefined", "symbol", and "bigint".
- The concat() method is used to combine/merge two or more strings. It does not change the existing string, but returns a new string. 
- **Garbage collection** is the process by which a programming language (like JavaScript, Java or Python) automatically frees up memory that is no longer being used by the program.
    - If there are two references, `x` and `y`, pointing to the same object in memory, and you set `x = null`, the object will not be removed from memory as long as `y` still references it. In most programming languages with garbage collection (like JavaScript or Java), an object is only eligible for garbage collection when no references to it remain. Since `y` still points to the object, it stays in memory.
- The **scope** refers to the availability of functions and variables in particular parts of the code. In JavaScript, we have three types of scope: block, function and global scope.
- The scope defines the visibility and accessibility of a variable. 
- **Global scope** refers to any variable declared outside of a function that can be accessed anywhere in the program. It can be defined using any of the three keywords: `let`, `const` and `var`.
- In JavaScript, global variables can be changed by any part of the code. Using global variables causes very tight coupling of the code. It adds risks of data type and reference errors if you overwrite values at the wrong time.  
- A **global variable** is a variable that is declared in the global scope, i.e. a variable that is visible from all other scopes.
- In JavaScript, the local scope variable is also referred to as function scope.
- In JavaScript, if a variable is declared without the `var`, `let` or `const` keywords, it is automatically considered a global variable. This occurs because JavaScript, in the absence of explicit declaration keywords, assigns the variable to the global scope.
- **Variables can have the same name as long as they are in different scopes.**
- An operator is capable of performing manipulations on certain values or operands. Operators are used to perform particular mathematical or logical computations on operands.
- **Arithmetic operators** help in performing mathematical operations between numerical operands. Arithmetic operators include +, - , /, %, **, ++ and --. In JavaScript, numbers are stored as floating point numbers.
    ```Example:
    We cannot be sure that 0.1 + 0.2 = 0.3 in JavaScript because of how floating-point arithmetic works.
    What actually happens?
            console.log(0.1 + 0.2);       // 0.30000000000000004
            console.log(0.1 + 0.2 === 0.3); // false

    Why?
    JavaScript uses IEEE 754 standard for representing numbers.
    Some decimal fractions (like 0.1 or 0.2) cannot be represented exactly in binary.
    So when you add 0.1 + 0.2, the result is slightly off: 0.30000000000000004
- **Relational operators** test for a relationship like "greater than" or "property of" between two operands and return true or false based on whether that relationship exists or not.
    - '==' operator compares the equality of two operands without taking the data type into account. It compares values after **type coercion**. 
    - '===' operator compares the equality of two operands with its data type. It compares both **value** and **type**.
- **Logical operators** are used to determine the logic between two values or variables. It returns boolean values and checks whether multiple conditions are true or false.
- Operator precedence tells us which operation is performed first in an expression which has more than one operator with different precedence. The logical AND operator (&&) has higher precedence than the logical OR operator (||).  
- The new operator creates an instance of a user-defined object type or of one of the built-in object types that have a constructor function.
- **Associativity** is used when two or more operators with the same precedence are present in the same expression. It defines the order in which operations of the same precedence are performed. 
- **Branching** tranfers control from the current statement to another statement in the program. It alters the execution sequence.
- The `for` loop iterates over elements a fixed number of times. It should be used if the number of iterations is known.
- `while` vs `do while` loop:
    - `while` loop evaluates the condition first and then executes the loop.
    - `do while` executes the loop and then evaluates the condition.
- **Switch statements**: The main aim of switch statements is to give an expression to evaluate and execute a number of different statements based on the value of the expression. If no match is found, a default condition will be used. 
    - The default switch case is not mandatory in the switch statement. However, it is recommended to add that in situations where none of the cases match.
- **Strict mode** (`'use strict';`) removes few JavaScript errors and fixes mistakes that make it difficult for JavaScript engines to perform optimizations. One use case: In strict mode, we cannot create a variable without a `var` keyword.
- A **function declaration** gives the information to the JavaScript engine about the function's name, return type and parameters. When a function is declared, it can be used anytime inside a class or development scope whenever it's called/invoked.
- A **function expression** is used to define a function inside any expression. It allows us to create an anonymous function that doesn't have any name.
- **Function declaration vs function expression**:
    - Function declarations are loaded before any code is executed and function expression loads when the interpreter reaches that line of code.
    - Function declarations are hoisted on top of the other code, while function expressions aren't hoisted. 
- **Arguments** are array-like objects accessible inside functions. It contains the values of the arguments passed to that function. Arguments have a length property starting with zero.
- A function that does not have a name associated with it is called an **anonymous function**. To define a function, we use the keyword `function` before the function name. 
- To pass a function as an argument to other functions, an anonymous function can be used. One of the use cases of an anonymous function is that it prevents the use of global variables.
- Minimizing the use of global variables is recommended as the excess use of global variables will lead to high coupling in different portions of a program, increasing program complexity and reducing the chances of software defects.
- **Immediately Invoked Function Expression (IIFE):** 
    - IIFE is a way to execute functions immediately, as soon as they are defined. 
    - IIFEs are very useful as they do not pollute the global object and provide an easy way to isolate variable declarations. 
    - IIFE has its own scope by restricting variables and functions to become global.
    - IIFE can have a name or can be anonymous. However, if an IIFE does not have a name, it is impossible to refer to/invoke it.
    - IIFE can also have parameters.
- **Arrays:** 
    - In JavaScript, **arrays** are a special type of object. The `typeof` operator returns "object" for arrays.
    - Arrays are resizable and can consist of a mix of different data types.
    - Arrays are zero-indexed.
- **Object:** 
    - An object is a standalone property, with properties and type. 
    - It  can be created in three ways:
        - Using object literal syntax.
        - Using the `new` keyword.
        - Using `object.create()` method.
    - An object contains properties or key-value pairs. Each property has a name, aka key, and it has a corresponding value.
    - The value of an object key can also be a function. 
    - Object properties can be accessed in three ways:
        - Dot property accessor
        - Square brackets property accessor
        - Object destructing
    - `this` keyword refers to an object that is executing the current piece of code in the current function.
  
