// Asynchronous code is a programming technique that allows programs to perform multiple tasks at the same time, or in parallel, without waiting for one task to finish before starting another. Asynchronous code is also known as non-blocking code.

// Here are some characteristics of asynchronous code:

// Non-blocking: Asynchronous code doesn't block other code from executing while it's running.
// Parallel execution: Asynchronous code can execute tasks in parallel or independently of one another.
// Ideal for distributed computing: Asynchronous programming is a good fit for distributed computing.
// Can be difficult to write and debug: Asynchronous programs can be challenging to write and debug.

// Some examples of asynchronous code include:

// setTimeout(): Specifies a callback function to be executed after a specified time.
// setInterval(): Specifies a callback function to be executed for each interval.
// Promise chaining: A pattern that involves connecting multiple promises in a sequence.
// Asynchronous code can be used in networking and communications. For example, texting is an asynchronous communication method where the sender can continue doing other things while waiting for a response.

// In JavaScript, promises are objects that represent the result of an asynchronous operation, and are a fundamental part of asynchronous programming:

// Promises are returned by asynchronous functions to represent the current state of an operation. They allow you to attach handlers to the promise object to be executed when the operation succeeds or fails.

// Why they are useful

// Promises help manage success and error conditions, and provide a better way to handle multiple callbacks.

// How they work

// Promises have three internal states: pending, fulfilled, and rejected:
// Pending: The operation is still in progress
// Fulfilled: The operation was completed successfully
// Rejected: The operation failed

//Creation of a Promise:-

const promiseOne = new Promise(function (resolve, reject) {
  //The (new) keyword is used to take the new instance.
  //Do an async calls.
  //DataBase Call, cryptography, network.

  setTimeout(function () {
    console.log("Async task is Completed.");
    resolve(); //Resolve() is connected to the then.
  }, 1000);
});

//Consumption of the Promise:-

promiseOne.then(function () {
  console.log("Promise is Consumed.");
});

//Another method to Write the Promises.

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 is resolved.");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Siddhant", email: "siddhant22@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  //The user parameter in the callback function of .then() contains the value passed by the resolve().
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "sid", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username; //This return.username will be catch by the another .then.
  })
  .then((username) => {
    //This then will catch the user.username.
    console.log(username);
  })
  .catch((error) => {
    //This will catch the reject.
    console.log(error);
  })
  .finally(() => console.log("The Promise is either resolved or rejected.")); //This will run whether our promise is resolved or rejected.

const promiseFive = new Promise(function (resolve, reject) {
  
  setTimeout(function () {
  
    let eror = true;
    if(!eror) {
      resolve({username: "javascript", password: "15951"})
    }

    else {
      reject("ERROR: JS went wrong.")
    }

  }, 1000)
});

// Capturing this promiseFive using another method.  //Async-Await.

async function consumePromiseFive() {
  
  try {
  const response = await promiseFive
  console.log(response);
  } 
  catch (error) {
  console.log(error);  
  }
} 

consumePromiseFive();


// async function getAllUsers(){
//   try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   // console.log(response)
//   const data = await response.json()  //Converting it into an object.
//   console.log(data)
//   } 

//   catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

//Writing the above function using the .then and the .catch.


fetch('https://api.github.com/users/Slither28')  //This value is running the first.
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => console.log(error))
