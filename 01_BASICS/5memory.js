// Stack (Primitive), Heap(Non-Primitive).

let myYoutubename = "siddhantdavedotcom";

let anotherName = myYoutubename;
anotherName = "chaiaurcodedotcom";

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
  email : "user@google.com",  //Object.
  upi: "user@bkl",
}

let userTwo = userOne;

userTwo.email = "siddhantdave2004@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);