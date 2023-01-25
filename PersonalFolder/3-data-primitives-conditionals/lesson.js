//COPY ME TO YOUR PERSONAL FOLDER - DO NOT EDIT HERE
//Warm up exercise
//Determine whether or not the following is appropriately labeled? 
let a = '4' // not specific 
// temperature 

const height = 35 // height is dynamic we should change it to a let variable


//Data Primitives
/*
Symbol
Number - Integers, decimasl
String - anything in double or single quotes
boolean - true false
*/

// undefined - a variable that has no data stored in it
// null - a variable that has data stored in it and the value is null


// let data 
// console.log('Data ', data)

// let someInfo = null
// console.log('SomeInfo ', someInfo)


//Control Flow - conditional statement
// let budget = 200
// const hotelRoomCost = 375

// //If my budget is more than the hotelroomcost -> go on trip
// //If not, I am too broke to travel
// // < less than

// if(budget > hotelRoomCost) {
//     //this will execute of the condition is met
//     console.log('LETS PACK OUR BAGS AND GOOOO!!')
// } else {
//     // this condition will execute of the condition is false
//     console.log('I am too broke to go....')
// }


//conditional statement - if/ else if/ else
let grade = "E"


if(grade === "A") {
    console.log("Excellent work")
} else if(grade === "B") {
    // if the original condition is not met but the else if condition is met
    console.log("Great work! ")
} else if(grade === "C") {
    // if the original condition is not met but the else if condition is met
    console.log("Can Improve")
} else {
    // if all conditions are not met
    console.log("Come to office hours!!")
}



//Comparison Operators
// let height = 100

// (height >= 40)

// let budget = 30000

// (budget > 2000)

// const passport = true

// (passport === true)


// console.log('equal to', 3 == '3') // true  == only compares the value not the data type 
//     //js will corece any numbers into a string and compare the two strings '3' == '3'

// console.log('strictly equals to', 3 === '3') // false === compares both value and data type 3 === '3'



//Logical Operators
let budget = 3000
let passport = true

     //F        &&      T 
(budget >= 4000 && passport === true) //false

    //F         ||     //T 
(budget >= 4000 || passport === true) //true



//Pair Programming exercise