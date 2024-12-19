// 2 ways to declare a number.
// In the first, JS automatically detects type to be number.
const score = 400
console.log(score);

// here we have explicitly defined that we want a number
const balance = new Number(100)
console.log(balance);
// Here, the output is slightly different. It shows [Number : 400]
// this indicates balance is a Number object wrapping value 400.

console.log(balance.toString());
// converts to string. 

console.log(balance.toString().length);
console.log(balance.toFixed(2));
// to.Fixed(n) formats a number to 'n' decimal places and returns result as a string.

const otherNumber = 123.896
console.log(otherNumber.toPrecision(3));
// study

const hunreds = 1000000
console.log(hunreds.toLocaleString('en-IN'));
// outputs 10,00,000

console.log(Math);
console.log(Math.abs(-4)); // returns absolute values. Converts -ves to +ves
console.log(Math.round(4.3)); // rounds to 4
console.log(Math.ceil(4.2)); // returns higher value. Ceiling.
console.log(Math.floor(4.8)); // returns lower value. Floor.
console.log(Math.sqrt(25));
console.log(Math.min(1,2,3,4,4,5,6,0));

console.log(Math.random());
// Math.random() always returns a value between 0 and 1

console.log((Math.floor(Math.random()*10) + 1 ));
// guarantees we dont get a 0 value.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);







