//It is very useful for the Arrays.

//For Each is the callback function.

const coding = ["js", "ruby", "java", "cpp"];

// coding. By using or writing the array name and ending with the dot we can be able to use many properties.

// coding.forEach( function name() {})  //So, This function is called the callback and the callback function doesnot have the name so we have to remove the name of the function mentioned in the below line.

coding.forEach( function (val) {  //Basic for Each loop.In the closed bracket we give the different names which will be anything such as val, item and they provides us the reference or point towards the our real arrays.
  //console.log(val);
} )

// Using the arrow function.

coding.forEach( (item) => {
  //console.log(item);
})

//Another Method.

function printMe(item) {  
  console.log(item);
}

coding.forEach(printMe);

//The for each not only carries the items but also carries the indexes and array lists.

coding.forEach( function (item, index, arr) {
  console.log(item, index, arr);
})

//Now, many objects in the arrays.

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },

  {
    languageName: "java",
    languageFileName: "java",
  },

  {
    languageName: "python",
    languageFileName: "py",
  }
]

//Now, we are applying the for each loop in the arrays to access the objects.

myCoding.forEach( (item) => {
  // console.log(item); //This will access the object.
  console.log(item.languageName);  //Accessing the Objects into the arrays and its all values.
  console.log(item.languageFileName); 
})
