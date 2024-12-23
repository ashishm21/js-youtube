// 2 ways : like literal, like constructor
// also like a singleton
// when declared like a literal, singletons are not created
// when created like a constructor, singletons are created

// object literals:
//Object.create  // consyructor method

const mySym = Symbol("key1")

const JsUser = {
    name: "Ashish",
    "full name" : "Ashish Mishra",
    [mySym] :"mykey1", //syntax for a key
    age: 24,
    location: "Goa",
    email: "armishra2721@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}
// accessing objects
console.log(JsUser.email);
// or
console.log(JsUser["email"]);
// this method is useful for accessing keys like "Full name" which have spaces in them
console.log(JsUser["full name"]);
// to access Symbol keys
console.log(JsUser[mySym]);


// changing object values
JsUser.email = "ashish@rediff.com"
// Object.freeze(JsUser) // this will freeze the object, and no changes can be made to it
JsUser.email = "ashish@micro.com"
console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JsUSer");
}
JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}!`);   
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
