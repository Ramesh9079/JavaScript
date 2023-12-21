

// for each loop doesn't return the value 
// const coding = ['JS','ruby','java','python','cpp']

//  const value = coding.forEach((item)=> {
//     // console.log(item);
//     return item;
//  })

//  console.log(value)



const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums=  myNums.filter( (num) => num > 4)
// console.log(newNums)

// ---------------------------------------------------------
// const newNums = myNums.filter((num)=>{
//    return num>4       
//     })
// console.log(newNums)
//  If we open the scoope in the filter then 'return' keyword is mandatory. 


// ----------------------------------------------------------
// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

//  const Array = [12,23,34,45,56,77]
// const newArray =[]

// Array.forEach((num) => {
//     if (num>30){
//         newArray.push(num)
//     }
    
// });
// console.log(newArray)


let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
      "color": "red",
      "type": "Merceedes",
      "registration": new Date('2022-03-03'),
      "capacity": 8
    },
    {
      "color": "green",
      "type": "station wagon",
      "registration": new Date('2019-03-03'),
      "capacity": 5
    }
  ]

// let userCar = cars.filter( (drive) => drive.color === 'red')
// userCar = cars.filter( (drive) => (drive.color === 'red' || drive.type === 'Merceedes'))
// userCar = cars.filter((drive)=> { return drive.capacity === 5})



console.log(userCar)