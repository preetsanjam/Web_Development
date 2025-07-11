class Person {
    constructor(name, age) {
        console.log(this); // Context of the constructor is the newly created object
        this.name = name;
        this.age = age;
    }

    // Adding a method
    celebrateBirthday() {
        this.age++; // The context is the object; 'this' refers to the object
    }
}

const john = new Person('John', 32);
console.log(john);

john.celebrateBirthday();
console.log(john);
