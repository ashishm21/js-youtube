const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// we pushed an array into another array. This is a nested array.
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1]); // accessing flash from nested array
// means access the 1st element of the 3rd element of the array


const all_heroes = marvel_heroes.concat(dc_heroes) 
// this will not work, as concat does not change the original array
console.log(all_heroes);

// SPREAD OPEARTOR
const all_new_heroes = [...marvel_heroes, ...dc_heroes] 
// this means all elements of marvel_heroes and dc_heroes are copied into all_new_heroes
// and all elements are at the same level, not nested

console.log(all_new_heroes);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// same result as concat, but the arrays are not nested

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);


console.log(Array.isArray("ashish"));
// this will return false, as "ashish" is a string, not an array
console.log(Array.from("ashish"));
// this will convert the string into an array of characters
console.log(Array.from({name : "ashish"})); //interesting
// this will convert the object into an array of objects and return an empty array because the object is empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// returns an array of the values passed in the arguments
