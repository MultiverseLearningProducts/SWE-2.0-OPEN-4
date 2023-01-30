/* 
Warm up exercise:

Pair-program - Using what we know so far, create a function that will count to 10.  

Extension - create a function that will sing happy birthday to you.

Lyrics:
Happy Birthday to you
Happy Birthday to you
Happy Birthday dear ${yourName}
Happy Birthday to you

*/

// const printTen = () => {
//     for (let i = 0; i < 10; i++){
//       console.log(i+1)
//     }
// }


// printTen()


// const printTen = () => {
//    console.log(1)
//    console.log(2) 
//    console.log(3) 
//    console.log(4) 
//    console.log(5) 
//    console.log(6) 
//    console.log(7)
//    console.log(8)
//    console.log(9)
//    console.log(10)
// }

// printTen()



// function happyBirthday(name){
//     for (let i = 0; i < 4; i++){
//         if (i <= 2  || i === 4){
//             console.log("Happy Birthday to you")
//             return "Happy Birthday to you"
//         } else {
//             console.log("Happy Birthday dear " + name)
//             return "Happy Birthday dear " + name;
//         }
//     }
// } 

// console.log(happyBirthday('raquel'));



/*
function happyBirthday(name) {
    console.log('Happy Birthday to you')
    console.log('Happy Birthday to you')
    console.log(`Happy Birthday to ${name}`) 
    console.log('Happy Birthday to you')
}

happyBirthday('Raquel')
*/
//For Loop Demo

    /* Syntax */

        // start     end               pattern
    // for(let i = 0; i <= stoppingPoint; i++) {
    //     //repetitive task
    // }

    //loop going forward from 1 - 10
    // for(let i = 1; i <= 10; i++){
    //    console.log("Say Hello")
    // }

    //loop going backwards
    for(let i = 10; i >= 0; i--) {
        console.log('Count down ', i)
    }
    

    //Loop skipping by n


    // Refactor the two warm up exercises
        //1. Create two functions for each 
        //2. use a forloop to create your functions


    //printTen - Refactor:
    function printTen() {
        for(let i = 1; i <= 10; i++) {
            console.log(i)
        }
    }

    printTen()
    
    //sayHappyBirthday - Refactor:
    /*
    Happy Birthday to you // 1
    Happy Birthday to you // 2
    Happy Birthday dear ${yourName} // 3
    Happy Birthday to you //4
    */
    function happyBirthday(name){
        for (let i = 1; i <= 4; i++){
            if (i === 3){
                console.log(`Happy Birthday dear ${name}`)
            } else {
               console.log('Happy Birthday to you')
            }
        }
    } 

    happyBirthday('Roman')


    /* Counter */

    //Write a function that is going to calculate how much money you will make after 3 months of being in bootcamp
    //Every paycheck you make is $1500
    //You get paid twice a month
    //return the amount of money you'll accumulate

    // function calculateNetIncome() {
    //     let totalIncome = 0 //counter

    //     for(let i = 1; i <= 3; i++) {
    //         //totalIncome += 1500 - sonam
    //         //totalIncome = (i * 2) * 1500 - Roman
    //         totalIncome += 1500 * 2 //- Nathan
    //     }

    //     console.log(totalIncome)
    //     return totalIncome
    // }

    function calculateNetIncome() {
        let totalIncome = 0 //counter

        for(let i = 1; i <= 3; i++) {
            totalIncome += 1500 * 2 //- Nathan
            console.log(totalIncome)
        }   
        //return totalIncome
    }

    //totalIncome = 0 // 3000 -> totalIncome = 3000
    //totalIncome = 3000 // 3000 + 3000 = 6000
    //totalIncome = 6000 // 6000 + 3000 = 9000
    calculateNetIncome()

    //break and continue

    //break - when a condition is met inside of your forloop - it will leave the forloop and continue the rest of your code

    function sayHiWhenEven() {
        for(let i = 5; i <= 10; i++) {
            console.log('i ', i)
            if(i % 2 === 0) {
                break
            }
        }
        console.log('HELLO!!!')
    }


    sayHiWhenEven()


    function skipAllOddNumbers() {
        for(let i = 0; i <= 10; i++) {
            if(i % 2 !== 0) {
                continue
            } else {
                console.log('i ', i)
            }
        }
    }

    skipAllOddNumbers() 

    /* Iterate through string */
    

//While Loop Demo

