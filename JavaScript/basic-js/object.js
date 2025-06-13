// Empty object
var fruits = {

};

console.log(fruits);

var sholay = {
    name: 'sholay', // In JS, keys are strings. Putting keys (name, cast) within quotes is optional
    cast: [
        'Amitabh', 'Hema', 'Dharmendra'
    ],
    'box Office Stats': { // Quotes are mandatory because the key has blank spaces
        countries: 20,
        collection: 12300000
    },
    addToCollection: function(amount) { // addToCollection is a method whose value is a function
        this['box Office Stats'].collection += amount; // 'this' is the context of the method
    }
}

// Accessing property names of object sholay
console.log(sholay.name); 
console.log(sholay.cast[0]);

// Accessing property names with special characters or spaces
console.log(sholay['box Office Stats']);
console.log(sholay['box Office Stats'].collection); // We use the dot operator because 'box Office Stats' is an object
console.log(sholay['box Office Stats']['collection']); // Another approach

sholay.addToCollection(350000);

// Adding a property to object 'sholay'
sholay.villan = 'Gabbar Singh';

// Adding a method to object 'sholay'
sholay.addToCast = function(newMember) {
    this.cast[this.cast.length] = newMember; // this.cast.length adds the value at one beyond the last item in an array 
}

sholay.addToCast('Sanjeev Kumar');
sholay.addToCast('Amjad Khan');

// Deleting a property
delete sholay['box Office Stats'];

console.log(sholay);