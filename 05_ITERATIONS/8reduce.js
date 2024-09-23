//Reduce Method.
//Saw the video no. 30 and understand it again and it is very simple.

//Without using the Arrow Function.

// const myNums = [1, 2, 3]

// //Not using the arrow functon.
// const myTotal = myNums.reduce(function (accumulator, currentValue) {
  
//   console.log(`Accumulator value is ${accumulator} and the Currentvalue is ${currentValue}`)
//   return accumulator + currentValue

// }, 0)  // 0 is the initial value which is passing to the Accumulator only on the 1st time. 

// console.log(myTotal);


// With the help of the Arrow Functions.

const array = [1, 2, 3];

const initialValue = 0;

const myArray = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue 
)

console.log(myArray);