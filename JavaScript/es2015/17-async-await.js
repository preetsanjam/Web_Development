const fetchAndAddTodos = async () => {
try {
        // 'await' keyword suspends the execution of the 'async' function till the promise is either resolved or rejected
        // In the meantime, other code / event handler gets executed
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = response.json();
        console.log(todo);
    } catch(error) {
        console.log(error.message);
    }
};

fetchAndAddTodos();