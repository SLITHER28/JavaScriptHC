const score = 400;
console.log(score);

const balance = new Number(100);  // To know more of this Object khela Plz check the whatsapp of ME dated 5 September. 
console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000000;
// console.log(hundreds.toLocaleString());  //Coverts the no. into the tens and thousands.

//************************************ Maths ************************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.2));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //Math.random gives us the random value from the range 0 to 1.
console.log((Math.random() * 10) + 1); //If we multiply it by the 10 then we will get the value from 0 to 9 and by adding it with the 1 we can insure that we will not be getting 0 value instead of it we will bwe getting the value from the range 1 - 9.

console.log(Math.floor(Math.random() * 10) + 1); // By multiplying with the Math.floor we will get a single floor value in the line no. 22.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // By multiplying it with the (max - min + 1) we will be getting an range between the min(10) - max(20).