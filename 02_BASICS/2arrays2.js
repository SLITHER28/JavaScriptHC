const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes);

// console.log(allHeroes);

// const allNewHeroes = [...marvelHeroes, ...dcHeroes];  //We are using the spread operation(.....abc).

// console.log(allNewHeroes);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("Hitesh")); // We are asking that this is array or not.
console.log(Array.from("Hitesh"));   //This will convert the string into the array.

console.log(Array.from({name : "Hitesh"}));  //Interesting case of converting the object into the array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array with the set of the variables.