// Dates.

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);  //Month starts from the 0 in the JavaScript.
// let MyCreatedDate = new Date(2023, 0, 23, 5, 3);

// let myCreatedDate = new Date("2023-01-14");

let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);  // Gives us the current time in the MilliSeconds.

// console.log(myCreatedDate.getTime());

let newDate = new Date();
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
  weekday: "long",
  month: "short",  //Another method to print the Month or the Day.

}));