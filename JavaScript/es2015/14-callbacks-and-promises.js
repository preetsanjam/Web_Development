const sum = (x, y) => {
    setTimeout(() => {
        return x + y;
    }, 2000); 
};

console.log(sum(10, 20));