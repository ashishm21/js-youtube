// use const if you dont want to reassign the value
// use let if you want to reassign the value
// avoid using var because it is function scoped, and can be accessed outside the block


let a = 3000;
if (true) {
    let a = 10;     // Block-scoped
    const b = 20;   // Block-scoped
    var c = 30;     // Function-scoped (or globally scoped if not in a function)
    console.log("Inner a: ",a);
    
}

//console.log(a);  // ReferenceError: a is not defined
//console.log(b);  // ReferenceError: b is not defined
console.log(c);    // 30
console.log(a);   // 3000 as a here is a global variable


//both let and const are block scoped, that means they only exist inside {} of the if block.
//accessing them outside block results in ReferenceError

//var is function scoped. since the if here is not a function, var c is elevated to a global variable and can be accessed outside the block
// this is why console.log(c) works outside the block and prints 30

//scope through node in our examples is different than the scope u find in the browser(inspect,console)



function one(){
    const username = "ashish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website); // this will throw an error because website is not defined in this scope

    two()
}

one()   

//in nested function, child function can access the variables of parent function, but parent function cannot access the variables of child function

if(true){
    const username = "ashish"
    
    if(username === "ashish"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); // this will throw an error because website is not defined in this scope
}
//console.log(username); // this will throw an error because username is not defined in this scope


//+++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));// this will work because function declarations are hoisted
// which means the function is defined before it is called
function addOne(num){ //this is a function declaration
    return num+1
}

console.log(addTwo(5));// this will throw an error because function expressions are not hoisted
// which means the function is not defined before it is called
const addTwo = function(num){ //this is a function expression
    return num +2
}



