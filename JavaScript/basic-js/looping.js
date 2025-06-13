// --------
// FOR LOOP
// --------

// Incrementing loop
for(var i= 1; i <= 10; i++) { // ++ operator increases the value of i by 1
    console.log(i); // Counts from 1 to 10
}

console.log('Incrementing loop stops')

// Decrementing loop
for(var i = 10; i >= 1; i--) { // -- operator deacresed the value of i by 1
    console.log(i); // Counts from 10 to 1
}

console.log('Decrementing loop stops')

// Loop with a step of 2
for(var i = 1; i <= 10; i += 2) {
    console.log(i);
}

console.log('Loop with a step of 2 stops')

// Loop with multiples of 3 
for(var i = 3; i <= 30; i += 3) {
    console.log(i);
}

console.log('Loop with a multiples of 3 stops')

// ----------
// WHILE LOOP
// ----------

// Incrementing loop
var j = 1
while(j <= 10) {
    console.log(j);
    j++;
}

console.log('Incrementing while loop stops')

// Decrementing loop
var k = 10
while(k >= 1) {
    console.log(k);
    k--;
} 

console.log('Decrementing while loop stops')

// Loop with a step of 3
var a = 1
while(a <= 20) {
    console.log(a);
    a += 3;
}

console.log('While loop with a step of 3 stops')

// -------------
// DO WHILE LOOP
// -------------

// Printing numbers from 1 to 5
var x = 1;
do {
    console.log('Count is: ' +x);
    x++;
} while(x <= 5);

// Counting down from 5 to 1
var num = 5;
do {
    console.log(num);
    num--;
} while(num > 0);