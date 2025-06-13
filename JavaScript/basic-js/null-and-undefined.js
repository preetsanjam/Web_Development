// Undefined value
var x;
console.log(x);
console.log(undefined);

// NULL
var y = null;
console.log(y);

// This creates an object with one property x that has the value 1.
var obj = {
    x: 1
};

obj = null; // obj no longer refers to the object { x: 1 }
// This simply removes the reference to the object. 
// obj now points to null, and the original object is eligible for garbage collection if nothing else references it.