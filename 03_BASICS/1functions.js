function sayMyName(){
  console.log("S");
  console.log("I");
  console.log("D");
  console.log("D");
  console.log("H");
  console.log("A");
  console.log("N");
  console.log("T");
}

// sayMyName // It gives us the reference of the function.
// sayMyName() // It executes our function.

// function addTwoNumbers(number1, number2){  //In this example we are just consoling the value that's why we are not able to store its value.

//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){  //In this example we are returning the value so that we can store its value in the another variable and print that variable.
  
  // let result = number1 + number2;  
  // return result;

  return number1 + number2;
}

// addTwoNumbers(3, 4);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);

const result = addTwoNumbers(3, 5);  // IF we return the value in the function then only we can be able to store its value in the another variable for eg. in the result variable.

// console.log("Result: ", result);

function loginUserMessage(username = "Sammy"){ // If you are not defining anything then the default value will be the Sammy and if you define something in the function the our default value will be the overwrite.

  if(username === undefined)
  {
    return console.log("Please enter a Username.");
  }
    return `${username} just logged in.`;
}

// loginUserMessage(username); // It will not print anything.
// console.log(loginUserMessage("Siddhant"));
console.log(loginUserMessage(""));  // Output is undefined.
console.log(loginUserMessage("Siddhant"));


// For the cart that we used in our E-Commerce websites and for adding the prices.

// function calculateCartPrice(num1){
  
//   return num1;
// }

function calculateCartPrice(...num1){  //We are using the rest also called the spread operator and it depends On its usecass.This will make an array of all our prices that we inserted in the cart.You can print it too.
  
  return num1;
}

// console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 300, 400)); //If we are adding the many items and we dont know how many itema an user can add.

const user = {
  username: "siddhant",
  price: 199,
}

function handleObject(anyobject){  // Passing the Objects in the function.
  console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}.`);
}

handleObject(user); //Accesing the objects using the function.

handleObject({       // Another way.
  username: "Sam",
  price: 399,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){  // There are so many different arrays will be there thats why we are taking get array instead of the myNewArray.

  // console.log(`The second value of the array is ${getArray[1]}`);
  return getArray[1]; 

}

// returnSecondValue(myNewArray); // Accessing the arrays value.

console.log(returnSecondValue([200, 1000, 500, 200, 60]));