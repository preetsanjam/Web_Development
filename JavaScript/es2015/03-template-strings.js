const name = 'John', message = 'Good morning';

// One way of concatenation:
// const greeting = message + ' ' + name + '!';

// Alternative:
const greeting = `${message} 


${name} !`
console.log(greeting);

// Remark:
// Backticks preserve new line characters

const john = {
    name: 'John',
    email: 'john@gmail.com',
    age: 32
};

// const strTr = '<tr>' +
//     '<td>' + john.name + '</td>' +
//     '<td>' + john.email + '</td>' +
//     '<td>' + john.age A+ '</td>' +
// '</tr>' 

const strTr = `
    <tr>
        <td>${john.name}</td>
        <td>${john.email}</td>
        <td>${john.age}</td>
    </tr>
`
console.log(strTr);