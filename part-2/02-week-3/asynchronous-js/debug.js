// function sayHello(first, last) {
//     return `Greetings ${first} ${last}! Hope you are having a great day.`
// }

// function sayYourName(first, last) {
//     return sayHello(first, last)
// }

// printGreeting('Surafel', 'Beyene')

// function printGreeting(first,last) {
//     const result = sayYourName(first,last) // `Greetings ${first} ${last}! Hope you are having a great day.`
//     console.log(result)
//     return
// }


//function definition 


//function invocation






















//Exercise: 
// You and a pair programmer will use the debugger tool to set a breakpoint and observe the behavior of the callstack
// The order of when functions get pushed and popped off


//
//
//
//
//callstack

//1. function invocations gets pushed onto the callstack
//2. functions get popped off when something gets returned from a function


// function sayOne() {
//     return sayThree()
// } //function definition


// function sayTwo() {
//     return '2'
// } // function definition

// sayTwo() // function invocation

// function sayThree() {
//     return '3'
// } //function definition


// sayOne() // function invocation
// sayThree() // function invocation





// function multiply(a, b) {
//     return a * b
// }

// function square(n) {
//     return multiply(n,n)
// }

// function printSquare(n) {
//     const result = square(n)
//     console.log(result)
// }

// printSquare(4)


function sayOne() {
    console.log(1)
    return 1
}

function sayTwo() {
    setTimeout(() => {
        console.log(2)
        return 2
    }, 0)
}

function sayThree() {
    console.log(3)
    return 3
}

sayOne()
sayTwo()
sayThree()

