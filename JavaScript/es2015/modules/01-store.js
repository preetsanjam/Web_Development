const product = (name, price) => {
    return { 
        name: name,
        price: price
    }
};

// Remarks:
// The above function returns an object
// The variable 'product' exist in two files -- 01-store.js and 01-index.js
// This is problematic as both are global variables
// There will be a conflict as 'const' keyword doesn't allow for redefinition of variables 
// We can the 'var' keyword as it allows for redefinition of variables
// However, we don't want a situation where we have two global variables with the same name
// To overcome this problem, we have modules