// Singleton.
//Object.create

// Object literals.
// Key : Value.

const mySym = Symbol("key1");


const JsUsers = {
  name: "Siddhant",
  "full name": "Siddhant Dave",
  age: 20,  // name will be treated as the String by the computer. 
  [mySym]: "myKey1", //Taking the Symbol as an key of an Object thats why we have to use the bracket type of the format.
  location: "Indore",
  email: "siddhantdave2004@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]  
}

// console.log(JsUsers.email);
// console.log(JsUsers["email"]);
// console.log(JsUsers.fullname); // We cannot take this fullname in this type of the format.

// console.log(JsUsers["full name"]);
// console.log(JsUsers[mySym]);

JsUsers.email = "siddhantdave@gpt2023.com";
// console.log(JsUsers["email"]);
// console.log(JsUsers.email);

// Object.freeze(JsUsers)  // This will freeze our values and will not allows us to do the change.
JsUsers.email = "siddhantdave@microsoft2024.com";

// console.log(JsUsers);

JsUsers.greeting = function(){
  console.log("Hello JS User.");
}

JsUsers.greetingTwo = function(){
  console.log(`Hello JS User, ${this.name}.`);
}

console.log(JsUsers.greeting());
console.log(JsUsers.greetingTwo());