var priceOfPhone = 42000, bankBalance = 20000, creditLimit = 60000;

if (priceOfPhone < bankBalance) {
    console.log('All OK. Process the payment.')
}
else if (priceOfPhone < creditLimit) {
    console.log('Bank payment failed. Credit limit will be used.')
}
else {
    console.log('Sorry. You do not have sufficient funds.');
}

console.log('Transaction is over.')

var priceOfCar = 500000, fundsInBank = 200000, loanAmount = 300000;

if (priceOfCar < fundsInBank) {
    console.log('Great! Buy the car.')
}
else if (priceOfCar < loanAmount) {
    console.log('Insufficient funds in bank. Take a loan.')
}
else {
    console.log('Loan amount also insufficient. Not buying the car.')
}

console.log('Transaction is over.')