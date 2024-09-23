//Map is the callback function.

//It automatically returns the value.

//Map will return everything.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.map( (num) => num + 10)  //Without opening the scope.

const newNumbers = myNumbers.map( (num) => {return num + 10})  //After opening the scope and using the return value.
//console.log(newNumbers); 

//By using the for Each loop.

// const howNumbers = [];

// myNumbers.forEach((num) => howNumbers.push(num + 10));
// console.log(howNumbers);

// Chaining :- Doing the multple operations.

// const newNums = myNumbers
//                  .map( (num) => num * 10) //This array will pass into the second chain.
//                  .map( (num) => num + 1)  //This array then pass on to the filter cahining
//                  .filter( (num) => num >= 40) //Now we will chaining the filter also and pass it to the variables.
                 
// console.log(newNums);
