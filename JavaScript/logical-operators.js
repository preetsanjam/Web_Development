// Logical operators 
var isRaining = true, goingByWalk = true, goingByCar = false;
var takeUmbrella = isRaining && goingByWalk; // AND operator 
console.log(takeUmbrella);   

var isRaining = true, goingByWalk = false, goingByCar = true;
var takeUmbrella = isRaining && goingByWalk;
console.log(takeUmbrella);  

var priceOfPhone = 42000, bankBalance = 60000, amIInterested = true;
var willIBuyPhone = priceOfPhone < bankBalance && amIInterested;
console.log(willIBuyPhone);

var priceOfPhone = 42000, bankBalance = 20000, freindBankBalance = 80000, amIInterested = true;
console.log(priceOfPhone < bankBalance || priceOfPhone < freindBankBalance); // OR operator 

console.log(!true); // Negation
console.log(!isRaining);