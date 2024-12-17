let score = "33"


console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

// "33" easily converts to 33
// "33abc" returns NaN
// "true" gives 1 , "false" gives 0

let age = 5 + "10"
console.log(age);
// js concatenates 5 and 10, assuming 10 is a string

let isEqual = 5 =="6"
console.log(isEqual);
// result is false, type coercion occurs

let bool1 = "ashish"
let bool1IsLoggedIn = Boolean(bool1)
console.log(bool1IsLoggedIn);

//1 gives true, 0 gives false
// "" gives false as empty string is considered falsy
// "ashish" gives true as a non empty string gives true

let string = 33
let stringNumber = String(string)

console.log(stringNumber);
console.log(typeof stringNumber)


let value = 3
let negValue = -value
console.log(negValue);
// returns negative value of a number


// basic operations
// console.log(2+2); add
// console.log(2-2); sub
// console.log(2*2); mult
// console.log(2**3); // means 2 to the power of 3, returns 8
// console.log(2/3); div
// console.log(2%2); remainder

let str1 = "hello"
let str2 = " ashish"
let str3 = str1 + str2
console.log(str3);
//  string concatenation

console.log("1"+2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
// if string first, entire () is considered as a string
// if at end, first operation done, then "" is appeneded
