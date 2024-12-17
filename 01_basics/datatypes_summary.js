//  Primitive Data Types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined as of now

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
 
const bigNumber = 3455737178371836489281312n //use 'n' after number

// Reference Types(Non-Primitive)
// Arrays, Objects, Functions 
// return type of arrays, objects are objects , while that of function is object function.


const heros = ["shaktimaan", "naagraj", "doga"] //array
let myObj = { 
    name : "ashish",
    age : 23
} //object is in key value pair

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object