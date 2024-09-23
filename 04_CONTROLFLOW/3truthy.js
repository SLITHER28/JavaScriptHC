// const userEmail = "h@hitesh.ai";

// if (userEmail) {  //If there is something in the String then it will treat the value as the true and the if statement will run.
//   console.log("Got the User E-mail.");
// }

// else {  //If my string is empty then it will treat the value as the False and it will run the else statement.
//   console.log("Dont have the user E-mail");
// }


const userEmail = [];

if (userEmail) {  //If the array is empty then it will treat it as the True and print our if statement.
  console.log("Got the User E-mail.");
}

else {
  console.log("Dont have the user E-mail");
}

// So, there is a rule for it.

//Falsey Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN.

//Truthy Values

// "0", 'false', " ", [], {}, function(){}9empty function).

// if(userEmail.length === 0){  // How to check an array if it is empty or not.
//   console.log("Array is Empty.");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {  //How to check if the object is empty or not.

  //Object.keys(emptyObj) will make an array of the object and by dding .length we will able to get the length of an object array.

  console.log("Object is empty.");
}

// Nullish Coalescing Operator (??): null undefined  // Sometimes our datbases gives us the null values or the undefined values so in future we have not face any consequences for it we will use this type of the operator.

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 10; //So, It will print the first value after the null.

console.log(val1);

//Ternary Operator.

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("Price is More than the 80.") : console.log("Price is Less than the 80.");