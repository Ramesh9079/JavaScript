

const marvel_heros = ["Ironman", "Spiderman", "Thor"];
const dc_heros = ["Superman", "Batman","Flash"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// Use of the Spread operator
// const all_new_heros = [...marvel_heros,...dc_heros]  
// console.log(all_new_heros);

// const oddNumber = [1,3,5,7,9]
// const evenNumber = [2,4,6,8,10]
// const primeNumber = [1,2,5,7,11]

// const number = [...oddNumber, ...evenNumber, ...primeNumber];
// console.log(number);

// Checking whether the given parameter is array or not
const name = Array.isArray("Ramesh")  
console.log(name);
// Converting into Array
const surname = Array.from("TAMANG")
console.log(surname);
const firstName = Array.of("RAMESH")
console.log(firstName);

const randNumber = [1,3,5,7,[2,5,9],3,4,[3,0]]
console.log(randNumber.flat(Infinity));


// Zero to Hero 