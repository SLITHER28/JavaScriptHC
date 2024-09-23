// var c= 300;
let a = 300;   // Global Variables.
let b = 500;
// var c= 800;  Var is not used because of his Dirty Scope Rules.

if (true) {  // This Curly braces are our scopes.

  let a = 10;   // Block Variables.
  const b = 50;
  var c = 30;
  // console.log("INNER: ", a);
  // console.log("INNER: ", b);
  // console.log("INNER: ", c);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){  // In the nested functions the child functions can acess to the parents functions and its variables. 
  const username = "siddhant";

  function two(){
    const website = "phone";
    console.log(username);
  }

    // console.log(website);

  two();
}

// one();

if(true){
  const username = "Siddhant";

  if(username === "Siddhant"){
    const website = " phone";
    // console.log(username + website);
  }

//   console.log(website);  //Error.
}
// console.log(username);  //Error.

// ******************* Interesting ****************

//Syntax 1.

console.log(addone(5)); // Printing the value before the declaration of the function and javascript can print it and it does not shows us an error.
function addone(num){

  return num + 1;
}

console.log(addone(5)); // Printing the value after the declaration of the functions.

//Syntax 2.

// addTwo(5);  //This method of the function showa us the error when declared above the functions. 
const addTwo = function(num){  //In JavaScript variables are able to hold the functions.
  return num + 2;
}

console.log(addTwo(5));