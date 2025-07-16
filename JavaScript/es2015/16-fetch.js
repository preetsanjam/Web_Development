// By default, fetch method uses GET HTTP method
// It returns a promise
fetch('https://jsonplaceholder.typicode.com/todos/1') 
    .then((response) => response.json()) // response.json() returns a promise
    .then(value => console.log(value))
    .catch((error) => console.log(error.message));

// POST data: Used to authenticate user's login credentials 
const newTodo = {
    "userId": 1,
    "title": "delectus aut autem",
    "completed": false
};

fetch(
    'https://jsonplaceholder.typicode.com/todos/',
    {
        method: 'POST',
        body: JSON.stringify(newTodo)
    }
)