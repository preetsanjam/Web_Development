// By default, fetch method uses GET HTTP method
// It returns a promise
fetch('https://jsonplaceholder.typicode.com/todos/1') 
    .then((response) => response.json()) // response.json() returns a promise
    .then(value => console.log(value))
    .catch((error) => console.log(error.message));

// POST data: Used to authenticate user's login credentials 

// JavaScript object
const newTodo = {
    "userId": 1,
    "title": "delectus aut autem",
    "completed": false
};

fetch(
    'https://jsonplaceholder.typicode.com/todos/',
    
    // Second argument is an object
    {
        method: 'POST',

        // Whatever data is to be sent to the backend is set to body
        // It cannot be a JS object, but a JSON-formatted string
        body: JSON.stringify(newTodo) 
    },
    {
        // Telling the backend explicitly the format of the data
        headers: {
            'Content-Type': 'application/json'
        }
    }
)   // All three arguments in the fetch() method return a promise
    .then(response => response.json())
    .then(value => console.log(value));