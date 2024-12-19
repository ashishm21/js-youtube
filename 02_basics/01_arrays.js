// array is a storage unit for data. can be of same type, or different
// to access data, console.log(myArr[n]), where n is index of item to be accessed.
// 3 ways to declare array:
const myArr = [0,1,2,3,4,5]
const myHero = ["iron-man", "shaktimaan"]
const myArr2 = new Array(1,2,3,4) // when declaring this way, list elements directly in ()

console.log(myArr[0]);


// Array Methods

myArr.push(6) // pushes value 6 in a declared array
myArr.push(7)
myArr.push(8) 
myArr.pop() // pops or removes the last element


myArr.unshift(9) // adds a 9 to the start of the array. not good
myArr.shift() // removed the 9
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); // returns -1, as value doesnt exist in array

const newArray = myArr.join()
console.log(myArr);
console.log(newArray);

// although output is same, types are different. First is an object, second is string

console.log(typeof myArr);
console.log(typeof newArray);

// slice, splice

console.log("A", myArr);

const myN1 = myArr.slice(1,3)
console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myN2);


