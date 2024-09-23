// for of

//This is the array-specific loops.

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const element of object) {  // Here in its syntax the object means ki kis cheez par hume loop lagana h.
  
// }

for (const nums of arr) { 

  console.log(nums); //It directly prints the value of the arrays and not its keys or the indices like the for-in loops.
}

const greetings = "Hello world!"

for (const greet of greetings) {
  //console.log(`Each char is ${greet}`);
}

//Maps. It is iteratable in the for-of loop.

const map = new Map()  //It holds one key and one value pair. KEY :- VALUE.

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

//console.log(map);

for (const key of map) {  //It prints the array of the map.
  //console.log(key);
}

for (const [key, value] of map) { 
  //console.log(key, ':-', value);
}

//Objects

//For-of loops is not iteratable for the objects.

const myObject = {
  game1 : 'NFS',
  game2 : 'Spiderman',
}

for (const key in myObject) {  //Not iteratable.
  console.log(key);
}

for (const [key, value] of myObject) {
  //console.log(key, ':-', value);
}