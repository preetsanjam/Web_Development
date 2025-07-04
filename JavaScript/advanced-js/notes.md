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
    - Hoisting is a default behavior of moving declarations to the top of the current scope and applies to variable and function declarations. Functions defined using an expression are not hoisted.

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
    - The `Object.setPrototypeOf()` method sets the prototype that is the internal [[Prototype]] property of a particular object to another object or null.
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
    - The `JSON.parse()` method is used to parse a JSON string that is written in JSON format and returns a JavaScript object. 
    
        Syntax:
        ```
        JSON.parse(string, function)
        ```
    - The array `push` method is used to add one or more new values at the end of an array, i.e., it appends values to the end of the array and alters the original array length.
    - When transferring data to a web server, the data has to be a string. We use a method `JSON.stringify()` that converts JavaScript objects into strings.  
- **Strict mode:** 
    - Strict mode removes a few JavaScript silent errors and fixes faults that make it hard for JavaScript engines to carry out optimizations.
    - In JavaScript, the strict mode was introduced in ECMAScript 5. It implements stricter parsing and error handling on the program code at runtime. It also helps write cleaner code and catch errors and bugs that may go unnoticed.
    - The strict mode can be executed in two ways:  
        - globally by adding the string `'use strict'` directive as the first statement in the file.
        - locally by adding the string `'use strict'` directive as the first statement inside a function.    
- **Exception handling:**
    - A **try...catch** is a frequently used statement in different programming languages. It is used to handle error-prone portions of the code. Firstly, it tests the code for all possible errors it may have. Secondly, it implements actions to handle those errors (if any).  
    In `try{}` block, the code that needs possible error-testing is placed. If an error occurs, it passes to the `catch{}` block to take appropriate actions to handle the error, else it executes the code written in the `try` block.
    - The `catch{}` block handles the error of the code by executing the statements of the code written within it. This block is executed only when any error-prone code needs to be handled in the `try` block, else the `catch` block is skipped.   
    - JavaScript has a built-in `error.message` object that gives error information when an error occurs. The message property of the error object provides a human-readable string that gives details about the error or exception that occured.
    - The `catch` block contains either the built-in handler or the user-defined exception handler.  
    - The `finally` block statements are executed after the execution of `try` and `catch` statements. It defines code statements that run regardless of the result.
    - JavaScript permits users to create their own customized errors using a `throw` statement. The error can be a string, number, boolean or object.      

        Syntax:
        ```
        throw expression; // expression defines the type and value of the exception
        ```
    - Custom errors can be created using `throw` with `try` and `catch` blocks.
    - JavaScript has a main class called `Error` that consists of properties such as name, message, filename and methods. 

        Syntax:
        ```
        new Error(msg, filename, line no);
        ```
- **`window` object:** 
    - The `window` object is an essential part of the Browser Object Model (BOM), which refers to the browser window. It has various methods affiliated with it such as `open()`, `close()`, `moveto()` and `resize()`.
    - The shortcut key to open developer tools: 
    
        - Mac: Command + Option + I
        - Windows/Linux: F12 or Control + Shift + J 
    -  When we are creating global variables, we are creating properties on the Window object.
    - The inverse is also true. When we create a property on the Window object, it becomes the global variable.  
- In the context of the JavaScript `window` object, there are three primary types of dialog popups used to interact with users: 
    1. **`alert` dialog popup**:
    
        The **`alert` dialog popup** displays a message that needs to be shown to the user. It has one button that can be used to acknowledge and close the popup box.  

        It is a blocking method. It blocks the execution of subsequent lines of code till you take action.
    2.  **`confirm` dialog popup**:
    
        The **`confirm` dialog box** is used to take a boolean answer from a user like yes/no, proceed/cancel, and more. The dialog box contains two buttons based on which appropriate action can be taken. 
    3. **`prompt` dialog popup:**
        
        The **`prompt` dialog box** is used to take input from the user. It contains a textbox and has a button for accepting the input entered by the user. 
- The **`history` object** is a property of the `window` object that contains the URLs visited by the user. It has three main methods: `back()`, `forward()` and `go()`.
- The `navigator` object is a property of the `window` object that contains information about the browser. It has various properties such as `appCodeName`, `cookieEnabled`, `geolocation`, `userAgent` etc.
- The `location` object is a property of the `window` object that contains information about the current URL. It has various properties such as `port`, `host`, `hostname`, etc. that help us identify the location of a particular URL.

    The primary difference between the `host` and `hostname` properties of the `location` object lies in whether they include the port number: 

    - `location.hostname`: This property returns the hostname of a URL without the port number.
    - `location.host`: This property returns the hostname and the port number of a URL, if the port is specified.

    The `location` object has three main methods: `assign()`, `reload()` and `replace()`. 
- The **Document Object Model (DOM)** is the hierarchical tree created for the `document` object, which contains the elements that are a part of the current document. Put simply, DOM is a tree of objects that a browser creates. Every object is a DOM Node. 

    ![DOM Image](dom-image.JPG)

    - **Need for DOM:** There is a need to identify a document's components for event management, DOM manipulation or dynamic CSS implementation, where DOM aids immensely. 

    - **DOM Node:** A DOM Node is an object that is created for every HTML element on a page. In other words, a DOM Node is an HTML element on an HTML page.            

    - **Accessing the `document`:** To access individual elements on a page, we can point out the element by using the `document.documentElement` and access the specific property we want to change.  

        For example:
        ```
        document.documentElement.style.backgroundColor = 'crimson'
        ```
    - Using the `document.documentElement.child`, we can understand the exact hierarchy for the `document` and then use the syntax `document.documentElement.childNodes[0]`..., since child nodes are all arranged as an array. 
    - We can access the DOM elements by traversing the hierarchy. For example:
        - `document.head` will point to the `<head>` tag.  
        - `document.title` will point to the `<title>` tag.
        - `document.body.p` will point to all the `<p>` tags in the `document`.
    - The `getElementById()` method is a convenient method provided by JavaScript to access an element on the screen by using the element's ID property.  
    - The `getElementsByClassName()` method is a convenient method to access multiple elements which have been clubbed together by using the `class` property. It returns an HTMLCollection, which is an array-like object. This means:
        - You can access elements using indices (e.g., `[0]`, `[1]`, etc.).
        - It has a `.length` property.
    
    - The `document.getElementsByTagName()` method is used to retrieve a live HTMLCollection of elements with a specific tag name from within the document.
    - The `document.querySelector()` allows us to access simple and complex CSS selectors that may have been used in the `document`. It returns only the first element it encounters. To retrieve multiple elements, we need to use the `document.querySelectorAll()` method.
    - The `setTimeout()` method pauses the execution of a particular function for a certain time. The time duration is set as the number of milliseconds required.
    - The `innerHTML()` property aids in setting and retrieving the HTML content of the element it has been invoked for. 
    - The `innerText()` property sets the text of the selected HTML element. It is generally used to display user inputs in a dynamic manner.   
    - The `style` property of an attribute can be accessed using the JavaScript `style` property that exists for all selector methods. Various colors, position and font changes can be made to elements using this property.
    - When we set any CSS property on the `style` property of a DOM node, it gets set as inline style.
    - The `classList` property returns the CSS class names of an element and has various methods like `add()`, `contain()`, `item()`, `remove()` and more that help in manipulating an element's CSS classes. 
    - The `<button>` tag's `onclick` attribute acts as an event handler and contains the call to the function that needs to be triggered on the click of the button.  
- **Events** are occurrences that can be used to trigger resulting actions in a programming environment. Some examples of events are a mouse's right click, a keyboard key being pressed down, a form button being clicked, etc. 

    Types of events:
    - **Window events**: These events relate to actions or states of the browser window. Examples: `load`, `unload`, `resize`, `scroll` and `DOMContentLoaded`.

        The load event fires on the `window` object,images, `<script>` tag, etc.
    
    - **Mouse events**: These events are triggered by interactions with the mouse. Examples: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout` and `contextmenu`.

        `click` is  related to buttons, div and paragraph.
        
        It is fired on any element.

    - **Keyboard events**: These events occur when a user interacts with the keyboard. Examples: `keydown`, `keypress` and `keyup`.
    
        Keyboard events are fired on input elements.

    - **Form events**: These events are associated with user interactions with HTML forms and form elements. Examples: `submit`, `change`, `focus`, `blur`, `input`, `select` and `reset`.
        
        `submit` is fired on the `form` element. When we click on the 'Submit' button, the submit event is fired on the `form` element.   
- An event handler is a function that is executed when an event is trigerred.  
- When does the `load` event fire on `window` object? Once DOM nodes are created, and all assets (scripts, stylesheets, font files, images etc.) are fetched (and executed if necessary).

    **Explanation**: 
    
    The `load` event on the `window` object fires when the entire page is fully loaded, which includes:
    - DOM content
    - External scripts and stylesheets
    - Images, videos, fonts
    - Other linked resources

    This is after everything has been downloaded and processed.
- The `onclick` attribute acts as an event handler and contains the call to the function that needs to be triggered on clicking an event.
- The `addEventListener` method is an alternate method to add an event-handling code. The method takes two arguments: first, the name of the event as a string; second; the function to be invoked to handle the event.  
- **Event handler context:** Every function has a context when it is called. An event handler is a specialized function used for handling an event and its context can be accessed by using the `this` keyword, which returns the HTML element for which the event handler was called.  
- When an event is fired (for example, a mouse click), the browser generates an object associated with that event. This object contains details about the event. 

    For example, when we click on a button, the browser will generate an object which will have details whether it was a right-mouse click or left-mouse click.               
        
    All such information is gathered in the `event` object and passed to event handler.
- The **`preventDefault()` method:** The `preventDefault()` method enables us to cancel the default action that normally happens, meaning that the default action that belonged to a particular event will no longer occur. 
- **Event propagation** is a way to describe the "stack" of events that are fired in a web browser. It has three phases:
    1. Capturing phase: The phase where the event goes down to the element.
    2. Target phase: The phase where the event has reached the target element.
    3. Bubbling phase: The phase where the event bubbles up from the element.  

    The **order of event propagation** is from the innermost element's event to the outermost element's events. 
- The `stopPropagation()` method is used to stop the bubbling phase in its track by completely stopping the event propagation.
- **Event's context and target:** The `event` object's context refers to the element for which the event has been called. The `event` object's target, on the other hand, always refers to the innermost child element in the event propagation process.  
- **ES6** or **ECMAScript6** is also known as **ECMAScript2015**. It was the second major update for JavaScript. It allows for the development of more complex web apps with the inclusion of constructs such as `const`, `let`, template literals and more. 