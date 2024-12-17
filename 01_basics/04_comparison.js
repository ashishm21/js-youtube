// basic comparisons
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// equality check == and comparisons >< >= <+ work differently. 
// comparisons convert null to a number, treating it as 0.
// hence null >= 0 is true and null > 0 is false

// === is strict check. here, not only value is checked, but datatype is checked too

console.log("2" === 2);
// returns false here it is checked if string is a number.