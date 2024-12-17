// Two types of memory:
// Stack , Heap


// Stack memory is used by primitve data types. Here, you get a copy of the variable declared.
// Heap memory is used by non-primitve data types. Here, you get a reference of the variable declared.
// Primitive datatypes are stored in stacks because they are simple and fixed in size.

let myYoutubeName = "ashishmishradotcom"
anothername = "snoop21"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne 
userTwo.email = "ashish@google.com"
console.log(userOne.email);
console.log(userTwo.email);

// By reference in heap, we mean the changes made are done in the stored value only.
// hence our user emails changed.