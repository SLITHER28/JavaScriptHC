const user = {
  username: "Siddhant",
  price: "999",

  welcomeMessage: function(){
    //console.log(`${this.username} , welcome to the website`); //(this) is used to access variables in the current context.
    //console.log(this); // It shows all the current values of the variables.
  }
}

user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

console.log(this);  //It will refers us the empty object as there is not any context. But it is not empty when used in the chrome console.

// ARROW FUNCTION :-

// const chai = function(){
//   let username = "Siddhant";  // This will only work on the object and it will not work in the functions.
//   console.log(this.username);
// }

const chai = () => {
  let username = "Siddhant";
  console.log(this);  //Empty paranthesis.
}

chai();

// const addTwo = (num1, num2) => {  //Baic Arrow functions.
//   return num1 + num2;  //So we have open the scope so we have to compulsarily use the return keyword.
// }

// const addTwo = (num1, num2) => num1 + num2;  //Implicit Return.(Method - 1)

// const addTwo = (num1, num2) => (num1 + num2)   // (Method - 2) If you use the curly braces then you have to write the return and if you are using the parenthesis then you have to not write the return.

const addTwo = (num1, num2) => ({username: "Hitesh"}) //For accessing the object we have to use the parenthesis.

//console.log(addTwo(3, 4));