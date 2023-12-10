//  Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
name : "Ramesh",
"full name": "Ramesh Tamang",
age : 22,
location: "Merrylands",
email: "ramesh@google.com",
isLoggedIn: false,
lastLoginDays:["Friday", "Saturday"],
[mySym]: "mykey1"
}

// console.log(JsUser["name"]);
// console.log(JsUser.location);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// To freeze the entire object:

// Object.freeze(JsUser);
// JsUser.name = "Aakriti Sharma"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());