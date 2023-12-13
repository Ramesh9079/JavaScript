// Immediately Invoked Function Expression (IIFE)

//  Global scope pollution create lots of problem and to solve that issue and immediately invoke the function, iife is used.
(function chai(){
    // named IIFE
    console.log(`DB Connected`)
}) () ; 

// 'semi colon' required to be used. 

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('Ramesh')
