// const x; Throws an error
// SyntaxError: Missing initializer in const declaration

const x = 1;
// x = 2; Throws an error because 'x' cannot be assigned another value

const obj = {
    y: 1
};

obj.y++; // Changing the value of 'y' property of 'obj'
console.log(obj);

// Remark:
// Whenever an object is a const, it does not mean it is immutable
// We can change the object
// However, we cannot assign 'obj' to another object or value

// The following code throws an error
/* 
obj = {
    y: 2
};
*/

// TypeError: Assignment to constant variable.