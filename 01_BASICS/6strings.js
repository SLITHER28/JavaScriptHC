const name = "Siddhant";
const repoCount = 50;

// console.log(name + repoCount + " Value");
// console.log(" Value" + repoCount + name);
// console.log(repoCount + " Value" +  name);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Plz follow this syntax only using the back ticks.

const gameName = new String("Siddhanthc"); //When a string is defined using this method by using the new then it is considered to be an object and it is also considered to be the Non - Primitive data type.

console.log(typeof gameName) //It is giving us the Object.

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

// Since our String which we defined using the new String("Siddhanthc") is an object then if we change anything in an object then the changes happens permanently console.log(gameName.toUpperCase()) then if we are changing this then why the permanent changes is not happening ?

//This is because the string is immutable in the javascript and the string is a special case meanng that once a string is created then th content cannot be changed.Whw=en you use a method like console.log(gameName.toUpperCase()); , it does not modify the existing string but returns a new string with the requested ransformation.

// For more information check the whatsapp of ME of date 3 September.

console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4); //Cannot be able to give the negative values.
console.log(newString);

const anotherString = gameName.slice(-8, 2)
console.log(anotherString);

const newStringOne = "   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Removes the unwanted spaces from the Strings.

const url = "https://hitesh.com/hitesh%20chaudhary";

console.log(url.replace('%20' , '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));