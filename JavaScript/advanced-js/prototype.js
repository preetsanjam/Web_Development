var obj = {
    x: 1
};

var proto = {
    y: 2
};

console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);

Object.setPrototypeOf(obj, proto);