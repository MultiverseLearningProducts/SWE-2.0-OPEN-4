/* -DO NOT EDIT COPY OVER TO YOUR PERSONAL FOLDER FIRST
You are the bouncer of a fancy club and you have to check the age of the customers before they can enter. Your task is to create a JavaScript program that checks the age of the customers and decides whether they are allowed to enter the club or not. If they are of age and allowed to enter the club, the program will then check how much money they brought in and decide if they will have a good time at the club or not.

Instructions

1.Create a JavaScript program that uses conditional statements (if, else if, else) to check the age of the customers.
2.Create a variable for the customer's age and another variable for the amount of money they brought in.
3.Use comparison operators to evaluate the customer's age and determine if they are over 21 and can enter the club, or if they are under 21 and cannot enter the club.
4.If the customer is over 21, use another comparison operator to check if they brought in enough money to have a good time at the club,
5.Print out a message that says "Welcome to the club!" if the customer is over 21 and has enough money, "Welcome to the club, but have a budget-friendly night" if they are over 21 but don't have enough money or "Sorry, you are not old enough to enter" if the customer is under 21.

Example
Customer 1: age 23 and brought in $100
Customer 2: age 18 and brought in $50

To have fun, you should bring in at least 100.

*/
//camelCase
let customerOneAge = 23
let customerOneMoney = 100

let customerTwoAge = 28
let customerTwoMoney = 50


//conditional statement
// 1. if the person is over 21 and brought enough money -> //message 1 [x]
// 2. if the person is over 21 but did not bring enough -> //message 2 [x]
// 3. if the person is under 21 they can't enter the club -> //message 3 [x]


function checkAgeAndBudget(age, budget) {
    if(age >= 21 && budget >= 100) {
        console.log("Welcome to the club!")
    } else if(age >= 21 && budget <= 100) {
        console.log("Welcome to the club, but have a budget-friendly night")
    } else {
        console.log("Cannot enter the club")
    }
}

checkAgeAndBudget(customerTwoAge, customerTwoMoney)




//Function syntax
// function functionName(parameters) {
//     //function definition 
// }

// let person = 'Aaron'
// let money = 300

// const personTwo = 'Nathan'
// let moneyTwo = 400

// function sayHello(name) {
//     console.log("hello ", name)
// }

// //To use a function we need to invoke it 
// sayHello(person)

// //Write a function that will double Aaron's money and let Aaron know that his money is doubled!

// function doubleMoney(money) {
//     return money * 2
// }


// function doubleAaronsMoney(moneyAmount, name) {
//     let doubledMoney = doubleMoney(moneyAmount)
//     console.log('Wow ', name, ' your money is now doubled: ', doubledMoney)
// }


// doubleAaronsMoney(moneyTwo, personTwo) //400, 'Nathan'


//Arrow functions
const nameOfFunction = (parameters) => {
    //function definition
}

//function declaration
// function doubleMoney(money) {
//     return money * 2
// }

const doubleMoney = (money) => {
    return money * 2
}


// function doubleAaronsMoney(moneyAmount, name) {
//     let doubledMoney = doubleMoney(moneyAmount)
//     console.log('Wow ', name, ' your money is now doubled: ', doubledMoney)
// }

const doubleAaronsMoney = (moneyAmount, name) => {
    let doubleMoney = doubleMoney(moneyAmount)
    console.log('Wow ', name, ' your money is now doubled: ', doubledMoney)
}



