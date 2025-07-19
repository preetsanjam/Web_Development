export const sum = (x, y) => x + y;
export const diff = (x, y) => x - y;
export var product = (x, y) => x * y;

// sum, diff and product are global variables


// We can have only one default export
// For the default export, we don't need a name for it
// Therefore, 'ComplexNumber' is optional
// Like anonymous functions, we have anonymous classes 
export default class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}; 