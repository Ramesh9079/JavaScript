const name ="Ramesh";
const repoCount= 4

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('ramesh')
console.log(gameName.length)

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

const userName = "Ramesh-tmg-coding-camp"

const newName = userName.substring(0,5);
console.log(newName);

const anotherName = userName.slice(-9, 7)
console.log(anotherName);

const newStringOne = "    Ramesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());  // Will remove the spaces from the value. 

const url = "https://ramesh.com/ramesh%20tamang"
console.log(url.replace('%20','-'))
console.log(url.includes('aakriti'))
console.log(userName.split("-" ));


// Required more string functions 
