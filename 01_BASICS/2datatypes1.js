// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

// Reference (Non - Primitive)

//Arrays , Objects, Functions.

const score = 100;
const scoreValue = 100.3;
let userName = "Siddhant";

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 45643455675849324574454n;

const heroes = ["superman", "batman", "wonderwoman"]; //Arrays

let muObj = {         //Objects.
  name: "Siddhant",
  age: 22,
}

const myFunction = function(){
  console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof id);
console.log(typeof userName);