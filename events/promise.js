// const promiseOne = new Promise(function(resolve, reject){
//     //  Do an async  task 
//     // DB calls, cryptography, network

//     setTimeout(function() {
//         console.log('Async task is complete')
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

// //---------------------------------------------


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },2000)
// }).then(function(){
// console.log("Async 2 resolved ");
// })

// //--------------------

// const promiseThree = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email:"chai@chai.com"})
//     },3000)
// })

// promiseThree.then(function(user){
// console.log(user)
// })

// -----------------

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"Hitesh", password:"123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })
// promiseFour
// .then((user)=>{
// console.log(user);
// return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function (err){
//     console.log(err)
// })
// .finally(()=>{console.log("The promise is either resolved or rejected")})



// -------------------

// const promiseFive = new Promise( function(resolve, reject){
//     setTimeout(function(){
//                 let error = true
//                 if(!error){
//                     resolve({username:"", password:"123"})
//                 }else{
//                     reject('ERROR: Javascript went wrong')
//                 }
//             },1000)
// })

// async function consumedPromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

// }
// consumedPromiseFive()

// -------------------------------------------------

async function getAllUsers(){
    try {
        const response = 
    } catch (error) {
        
    }
}