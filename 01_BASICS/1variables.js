const accountId = 144553 // You cant change the const once its value is Declared.
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountcity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "siddhant@google.com"
accountPassword = "21212213"
accountCity = "Bengaluru"

console.log(accountId)

/* Dont use the var again.
Because of the issue in the block scope and
functional scope.*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])