//  if statement

// const isUserLoggedIn = true

// if (3!=='3') {
//     console.log("Executed")

// }

// const score = 200
// if (score>100){
//     const power = 'fly'
//     console.log(`User Power: ${power}` );
// }
// console.log(`User Power: ${power}` );


// ------ Shorthand Notation -------//

const balance = 2000
// Implicit scope 
// if(balance > 1001) console.log("test")


// if (balance<500){
//     console.log('Less than')
// } else if (balance < 750){
//     console.log("Less than 750")
// }else if (balance < 1050){
//     console.log("Less than 1050")
// }else if (balance < 2250){
//     console.log("Less than 2250")
// }


//  Use of AND(&&), OR(||)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard){
    console.log("You can purchase the course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("Please proceed the shopping");
}
