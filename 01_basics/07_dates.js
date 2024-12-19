let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString()); // only returns date
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); // returns date seperated by a /
console.log(typeof myDate);
// Date is an object

let myCreatedDate = new Date(2024,0,23, 5, 3)
console.log(myCreatedDate.toLocaleString());
// 0 is the month index. Months from Jan - Dec are labeled as 0-11.

// let myNewDate = new Date("2024-12-19")
// console.log(myNewDate.toLocaleString());
// Here, month begins from 1.

let myNewDate = new Date("12-19-2024")
console.log(myNewDate.toLocaleString());
// This is the MM-DD-YY format

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// returns a ms value from January 1 1970. Compare to get results

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // to convert to seconds, divide by 1000 and either ceil or floor

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1); // to get month date, not array index


const a = newDate.toLocaleString('default', {
    weekday: "short"} )

console.log(a);

// weekday long returns full name of day, short returns few letters
// use ctrl+space to get sugggestions