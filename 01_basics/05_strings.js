// THis is the primitive way of declaring string by assigning a string literal. 
// Stored in stack.
const name = "ashish"
const repoCount = 6

// const op = name + repoCount
// console.log(op +"Value"); 
// or console.log(name + repoCount + " Value")
// both have same output 
// These are outdated. We use backticks, where we create placeholders.
// there, we can nject variables directly using $ sign

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// This is known as string interpolation. You can use methods on the go.
// Like ${name.ToUpperCase}


const gameName = new String('Snoop-21') 
// another way of creating a string known as string object.
// we create a string using new String() constructor, pass name in (). 
// Stored in heap.

console.log(gameName[0]);
// accessing the 0th key in gameName.
console.log(gameName.__proto__); //to access protocols as shown in console in browser.
// although it returns a {}, you can check for actual results in browser

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('6'));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,3)
console.log(newString);
// starts from n(our case 0), goes upto n-1(our case,2).
// Hence output is Sno
// wont take -ve values

const anotherString = gameName.slice(-6,3)
console.log(anotherString);
// starts at -6 (n), ends at 3(o). Output is no
// can use -ve values

const newString1 = "   ashish   "
console.log(newString1);
console.log(newString1.trim()); 
// .trim() trims all unnecessary spaces
// works on white spaces and line terminators(\n)
// has trim.Start() and trim.End()

const url = "https://ashish.com/ashish%20mishra"
console.log(url.replace('%20', '-'))

console.log(url.includes('ashish'))
// checks if value passed is present or not

console.log(gameName.split('-'));
// returns an array based on split

