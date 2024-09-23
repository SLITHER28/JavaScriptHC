//for

// for (let i = 0; i <= 10; i++) {
  
//   const element = i;

//   if(element == 5)
//   {
//     console.log("5 is the best number.");
//   }
//   console.log(element);
// }

//Tables from the 1 to 10.

// for (let i = 0; i <= 10; i++) {
//   console.log(`The table of the: ${i}`);
//   for(let j = 0; j <= 10; j++)
//   {
//   // console.log(`Inner loop value ${j} and outer loop value ${i}`); 
//   if(i == 0 || j == 0) {
//     continue;
//   }
// else {
//     console.log(`${i} '*' ${j} =` ,i * j);
//    }
//  }
// }

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element);
// }

// Break and Continue.

// for (let i = 0; i <= 20; i++) {

//   if(i == 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(`Value of i is: ${i}`);
// }


for (let i = 0; i <= 20; i++) {

  if(i == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i is: ${i}`);
}