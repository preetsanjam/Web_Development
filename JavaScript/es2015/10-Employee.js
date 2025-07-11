class Person {
    constructor(name, age) {
        // console.log(this); 
        this.name = name;
        this.age = age;
    }

    // Adding a method
    celebrateBirthday() {
        this.age++; 
    }
}

class Employee extends Person {
    constructor(name, age, role, dept) {
        super(name, age);

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = 'Senior ' + this.role;
    }

    celebrateBirthday() {
        super.celebrateBirthday() // Calling the base class method inside the derieved class method
        console.log('Happy Birthday');
    }
}

// When Employee object is created, there is a default constructor that is created
const john = new Employee('John', 32, 'Web Development', 'IT');  
console.log(john);

john.promote();
console.log(john);

john.celebrateBirthday();
console.log(john);