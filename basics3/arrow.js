
const user = {
    username: "Ramesh",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)

// ----- We can't execute "this" function  inside the function itself ----

// function chai (){
//     const name = "Shrinkhala"
//     console.log(this.name)
// }
// chai()

// --- Arrow function ------------


// const chai = () => {
//     let name = "Amesh"
//     console.log(this.name)
// }
// chai()  



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)



console.log(addTwo(3,4))