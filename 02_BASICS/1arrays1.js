// Arrays.

const myHeroes = ["Superman", "Batman", "Ironman"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

const myArr = [0, 1, 2, 3, 4, 5];

// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // Removes the last value of the array.

// myArr.unshift(9); // All values shifted from the 1 index and adds the value at the 0th index.
// myArr.shift();  // Removes the values at the first index.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); // The join() converts the new array into the String.
// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr); // Its type is the String.

// Slice, Splice.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //Slice does not manipulates the original array.
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);  //Splice manipulates the original array.
console.log("C ", myArr);
console.log(myn2);