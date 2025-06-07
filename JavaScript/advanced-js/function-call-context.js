// Whenever we call a function, there is a context set-up within that function
// Every function call has an associated context 
function foo() {
    console.log(this);
};

foo();

var john = {
    name: 'John',
    getName: function() {
        console.log(this);
        return this.name;
    }
};

console.log(john.getName());