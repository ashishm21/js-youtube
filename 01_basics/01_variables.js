const accountId = 14453
let accountEmail = "armishra@gmail.com"
var accountPassword = "12345"
accountCity = "Goa"
let accountState;
// accountId = 2
accountEmail = "hc@hc.com"
accountPassword = "21221"
accountCity = "Mumbai"

console.log(accountId);
/*
Prefer not to use var as variables declared with var inside a block {} can be accessed outside the block too.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])