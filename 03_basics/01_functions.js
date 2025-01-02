function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}
// this is the function definition


// sayMyName this is reference. to execute, use (), it wont return anything
// sayMyName(); // this is the function call


function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}

addTwoNumbers(3,4) // if no number is passed, it will return NaN
addTwoNumbers(3, "4") // this will return 34, because it is a string
addTwoNumbers(3,"a") //returns 3a
addTwoNumbers(3, null) // returns 3

//const result = console.log("Result:", addTwoNumbers(3,4)) // this will return undefined, because the function does not return anything;
// to counter this, we write the function as:

function addTwoNumbers(number1,number2){
    let result = number1+number2;
    return result
    console.log("This will never be printed"); // this will never be printed as it is after return statement
}

// or!
function addTwoNumbers(number1,number2){
    return number1+number2;
}


function loginUserMessage(username){ // if u give a default value, u will never get undefined because at max, the minimum value will be the default value
    if(username === undefined){
        console.log("Please provide a username");
        return // this makes sure that if check is true, it wont go to the next line to print is logged in
    }// checks if username is undefined. if it is, it will print the message
    return `${username} is logged in`
}

loginUserMessage("Ashish")// this wont print anything, because we need to console.log it
console.log(loginUserMessage("Ashish")); // this will print Ashish is logged in
console.log(loginUserMessage("")) // this will print is logged in, because the username is empty
console.log(loginUserMessage())// this will print undefined is logged in, because the username is not passed


// if u want to pass multiple values, u can do it like this using rest operator
function calculateCartPrice(...num1){ // this is the rest operator, it will take all the values and store it in an array
    return num1 
}

console.log(calculateCartPrice(200,500,5000,5000));

//rest and spread operator are the same, but the spread operator is used to spread the values, and the rest operator is used to collect the values

//interview question
function calculateCartPrice2(val1, val2, ...num1){ // this is the rest operator, it will take all the values and store it in an array
    return num1 
}
console.log(calculateCartPrice2(89,8999,921929,48185));
//here, ...num1 takes all values after 8999, and stores it in a array.
// this is because val1 takes 89, val2 takes 8999, and ...num1 takes rest values


// passing object in a function
const user = {
    username: "Ashish",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
const anotherUser = {
    username:"Aashinya",
    price:299
}
handleObject(user)
handleObject(anotherUser)
//By using a generic parameter name like anyObject, you can call the function with different objects and not just the user object. 
//  u can also pass object as 
handleObject({
    username:"Ajay",
    price:399
})

// to pass array
const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500]));
