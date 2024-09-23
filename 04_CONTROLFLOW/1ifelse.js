// If

// <, >, <=, >=, ==, !=, ===, !==.
// const temperature = 41;

// if (2 == "2"){
//   console.log("executed");
// }

// if(2 === "2"){
//   console.log("executed");  //The triple equal signs also checking its datatype which is false.
// }

// if(temperature === 40)
// {
//   console.log("Less than the 50.")
// }
// else{
//   console.log("Temperature is greater than 50.")
// }

// const score = 200;

// if(score > 100) {
//   const power = "fly";
//   console.log(`The user will get the power of the ${power}.`);
// }

// console.log(`The user will get the power of the ${power}.`); //it will not print there as its scope is limited to only the if block.

// const balance = 800;

// if(balance < 500) {
//   console.log("less than the 500.");
// }
// else if(balance < 750) {
//   console.log("less than 750.");
// }
// else if(balance < 900) {
//   console.log("less than 900.");
// }
// else{
//   console.log("It is greater than the 1000.");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;  //Google se login nahi kiya.
const loggedInFromEmail = true;    //Email se login kiya h.

if (userLoggedIn && debitCard)
{
  console.log("Allow me to buy the course.");
}

if(loggedInFromGoogle || loggedInFromEmail)
{
  console.log("User logged in.");
}

