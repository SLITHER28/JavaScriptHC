const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift",
}

for (const key in myObject) {  //Accesing the keys with the help of the for-in loops.
  //console.log(key);
}

for (const key in myObject) {   //Accessing the Values of the keys in the objects objects with the help of the for-in loops.
  //console.log(myObject[key]);
}

for (const key in myObject) {    //Accessing the whole objects with the help of the for-in loops.

  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// For - In loops in the Arrays.

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
  //console.log(key); //It does not directly print the values like the for-of loops but it prints the keys(indices) of the arrays.
}

for (const key in programming) {
  //console.log(programming[key]); //This method helps us to access the values of the Arrays.
}


const map = new Map()  //It holds one key and one value pair. KEY :- VALUE.

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

for (const key in map) {  //for-in loop doesnot work with the map.
  console.log(key);
}

//So, For-0f loop works with the maps easily while it does not works with the objects.
//And, For-In loop works with the objects easily while it does not works for the map.  