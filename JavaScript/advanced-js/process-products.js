const strProducts = `
[
    [
    {
        "name": "Hammer", 
        "description": "A claw hammer",
        "price": 120, 
        "rating": {
            "min": 2,
            "max": 10
        }
    },
    {
        "name": "Vide game controller",
        "description": "A video game controller",
        "price": 15000
    }
]
]
`;

var products = JSON.parse(strProducts); // Converts JSON format string into a JS array
console.log(products);

var newProduct = {
    name: "Biscuits",
    description: "Whole wheat biscuits",
    price: 30
};

products.push(newProduct);
console.log(products);

var strProductsSendBack = JSON.stringify(products); // Returns a JSON-formatted string
 console.log(strProductsSendBack);