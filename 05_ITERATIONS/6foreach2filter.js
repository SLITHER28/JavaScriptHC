//Holding the values of the foreach loop into the variables.

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {  //Storing the values of the for each loop in the values varible.
//        console.log(item);
// })

// console.log(values); //Its value is undefined means that the forEach loop does not return any of the values.

//If I want some specific values from the arrays so we will be using the filter options.This is also based on the callback functions as I cant access the specific values with the help of the forEach loops.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {  //When you make this scope open then you have to compulsarily return the value go and watch the arrow function file last lines.
//  return num > 4
// })
// console.log(newNums);

// const newNums = myNums.filter( (num) => num > 4) //If you are not using any of the scopes then you dont have to use the return keywords.

// console.log(newNums);

//Using only the forEach loop to access the specified values rather than that of the filter but it is complex as it uses the if statement inside it.

// const newNums = []

// myNums.forEach( (num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// })

// console.log(newNums);

//Consider it as the databases and now the user wants to apply some filter on it.

const books = [

  {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
  {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
  {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
  {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
  {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
  {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
  {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
  {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2011},
  {title: 'Book Nine', genre: 'Non-Fiction', publish: 2011, edition: 1989},
];

//Now we want to access the some keys and values in the objects inside an array.So we will be using the filter method inside it.

//We are using the kitaab word as it is directly referencing to the objects in our arrays.

// const userBooks = books.filter( (Kitaab) => {  //With using the scopes so we have to use the return keyword.
//   return Kitaab.genre == 'History'
// })

let userBooks = books.filter( (Kitaab) => Kitaab.genre == 'History')   //Without using the scopes so we did not have have to use the return keyword.

userBooks = books.filter( (Kitaab) => {
  return Kitaab.publish >= 2000})

userBooks = books.filter( (Kitaab) => {
  return Kitaab.genre === 'Fiction' && Kitaab.edition >= 2000})
  
console.log(userBooks);