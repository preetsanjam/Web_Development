// Run the code in the browser console

// "global object"
console.log(window);

var x = 1; // global variable

// Remarks:
// When we are creating global variables, we 
// are creating properties on the Window object

// The inverse is also true. When we create a property
// on the Window object, it becomes the global variable.

// For example:
// window.y = 3; Setting the property on Window object
// y will return 3; y becomes the global variable