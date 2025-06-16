// Run the code in the browser console

console.log(location);
console.log(location.protocol);
console.log(location.path);

// Browser's address bar is set up with 'location'
// This helps to navigate to a website programatically 
location = 'https://www.google.com';

// location and location.href serve the same purpose 
location.href = 'https://www.medium.com';

// assign() method maintains the history stack
location.assign('https://www.google.com');

// replace() method removes the current page from the 
// history stack and replaces it with google.com
location.replace('https://www.google.com');

// reload() method reloads the same page
location.reload('https://www.google.com');