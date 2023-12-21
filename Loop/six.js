//  reduce method in array

// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc+curval
// },0
// )

// const myTotal = myNums.reduce((acc, curval) => acc+curval, 0)

// console.log(myTotal)


const electronics = [
    {
        productName: " Samsung Monitor", 
        productPrice: 500
    },
    {
        productName: "Mechnical Keyboard", 
        productPrice: 160
    },
    {
        productName: "Logitech Mouse", 
        productPrice: 120
    },
    {
        productName: "Standing desk", 
        productPrice: 918
    },
    {
        productName: "Macbook Pro", 
        productPrice: '2850'
    },
]

// const totalPrice = electronics.reduce( (initial, items) => initial+ items.productPrice, 0)
// console.log(totalPrice);

const totalPrice = electronics.filter((item) => typeof(item.productPrice) === "number" )
console.log(totalPrice)