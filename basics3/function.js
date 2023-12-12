

function sayMyName (){
    console.log("R");
    console.log("A"); 
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers (number1, number2){
// console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){
// let result = number1 + number2
// return result
return number1+ number2

}
const result = addTwoNumbers(3,4)
// console.log(result);


function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage('Ramesh'))

// console.log(loginUserMessage())

// If you don not pass the argument in the function then it will give undefined. 

//  undefined and empty argument will return false values.


function holiday (day) {
    if (!day){
        console.log("It is your working day");
        return
    }
    return `${day} is your work off day`
}

// console.log(holiday('Sunday'))
// console.log(holiday(''))


// Rest operator in the function
function  calculateCartPrice (...num1){
return num1
}
// console.log(calculateCartPrice(200,300,500,1000,2400));


function calculateNumbers (val1,val2,...num1){
    return num1
}

// console.log(calculateNumbers(100,200,300,400,500,600))


// const object = {
//     username:"Ramesh",
//     price: 499
// }

// function objectName (values){
//     console.log(`Username is ${values.username} and the price is ${values.price}`)
// }
// //  objectName(object)
// objectName({
//     username:"Anish",
//     price:599
// })



const myArray =[100,1000,10000]

function arrayCalculator (array) {
    console.log(array)
}
arrayCalculator(myArray)