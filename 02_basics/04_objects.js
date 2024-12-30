const tinderUser = new Object()
// if u declared it as const tinderUser = {}, and print it, shows empty object.
// console.log(tinderUser); retrieves an empty object


tinderUser.id = "123abc"
tinderUser.name = "Ashish"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Ashish",
            lastName: "Mishra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);// accessing nested objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign({}, obj1,obj2)// this will merge obj2 into obj1 and store it in obj3
// console.log(obj3); 
// syntax is Object.assign(target, source1, source2, source3, ...)

const obj3 = {...obj1, ...obj2} // this is the spread operator, and does the same thing as Object.assign
console.log(obj3);

// when u get values from a db, it is possible u get multiple objects

const users = [
    {
        id: 1,
        name: "Ashish",
        email : "ashish@gmail.com"
    },
    {
        id: 1,
        name: "Aaashinya",
        email : "aashinya@gmail.com"
    },
    {
        id: 3,
        name: "Ajay",
        email : "ajay@gmail.com"
    }
]

console.log(users[1].name);
console.log(users[2].email); // accessing nested objects

console.log(Object.keys(tinderUser)); // this will return an array of all the keys in the object
console.log(Object.values(tinderUser)); // this will return an array of all the values in the object
console.log(Object.entries(tinderUser)); // this will return an array of arrays, where each array contains a key value pair
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// this will return true if the key exists in the object, else false
console.log(tinderUser.hasOwnProperty('isLoggedOut'));// returns false

const course = {
    courseName : "JS",
    price: "999",
    courseInstructor: "Ashish"
}

const {courseInstructor :instructor} = course// this is object destructuring. 
// courseInstructor is the key in the object, and instructor is the variable where the value of the key will be stored

console.log(instructor);


