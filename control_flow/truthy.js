// const userEmail = "r@gmail.com"

// if (userEmail){
//     console.log('Got User Email')
// }else {
//     console.log(`Don't have user email `);
// }

// -------- Falsy Values ----------

// false, 0, -0, BigInt 0n, '', undefined, null, NaN 

// ---- Truthy value ----
// '0' , 'false' , " " , [], {}, function(){}
// String value wth 0 is also truthy value

// const userEmails = []

// if (userEmails.length === 0 ){
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// ------- Nullish Coalescing Operator (??) : null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 12
// val1 = undefined ?? 14
// console.log(val1);

// ----  Terniary Operator 
//  condition ? true : false

const iceTeaPrice = 80 
iceTeaPrice <= 100 ? console.log("less than 100"): console.log("more than 100");