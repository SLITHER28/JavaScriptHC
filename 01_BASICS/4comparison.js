// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //Comparisons converts the value of the null into the number.
console.log(null == 1);  //Equality cannot be able to convert the null into the zero.
console.log(null >= 0);  //Here, also equality converted the null into the equality. 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

console.log("2" == 2)  //The == Shows the true as it converts the string into the number and then check.
console.log("2" === 2) // The === Strictly checks the value as it checks both the datatypes too.