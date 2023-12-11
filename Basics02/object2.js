
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        usersName: {
            firstname :"Ramesh",
            lastname:"Tamang"
        }
    }
}

// console.log(regularUser['fullname']['usersName']['lastname'])
// console.log(regularUser.fullname.usersName.firstname);

const obj1 = { 1:'a',2:'b'
}
const obj2 = {3:'a', 4:'b'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2);

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        id :1,
        email:'ramesh@facebook.com'
    }
,
    {

    }
    
]

// console.log(users[0].email);

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(tinderUser.hasOwnProperty('username'))