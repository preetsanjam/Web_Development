// Run the code in the browser console

// alert() is a method of the window object
// It is used for displaying information messages 
// It is a blocking method
// It blocks the execution of subsequent lines of code till you take action

alert('This is for your information'); 
console.log('after alert');

// confirm() dialog
// It is also a blocking method
var result = confirm('Do you really want to exit the website?')
console.log(result);

// prompt() mehtod
var result = prompt('What is your favorite city?', 'Chandigarh'); // Second argument is the default value
console.log(result);