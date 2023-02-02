/* WARM UP 
1. Write a function isPalindrome that determines whether a string is a palindrome or not.
    - A palindrome is a word that is the same forward and backwards: ex: racecar, bob, abba
    - Hint: You can use .split('') -> ex: const name = 'william' // ["w","i","l","l","i","a","m"]
    - Hint: Think of an array method we learned that might assist you. As a challenge, don't use any array methods!
*/

// .reverse()
function isPalindrome(str) {
    str = str.toLowerCase()
    //edgeCase 1 
    if(str.length === 1) return true
    //split the string into an array
    let strSplit = str.split('').reverse().join('')
    
    console.log(str === strSplit)
    return str === strSplit

}



// Two pointer method
//    pL          pR  
//[r ,a ,c ,e ,c ,a ,r]

function isPalindromeTwoPointer(str) {
    let pL = 0
    let pR = str.length - 1

    while(pL < pR) {
        //check the values of each index
        if(str[pL] !== str[pR]) return false
        pL++
        pR--
    }

    return true
}

/*
2. You and a friend are trying to create a tic, tac, toe game. One of the functions you are trying to write is to generate a new board. Write a function createNewGame that will create an empty tic,tac,toe board!
    - Output: [[null,null,null],
               [null,null,null],
               [null,null,null]]

    ** Super Extension (solution will be released EOD): write a function that will determine if there is a winner for a tic,tac,toe match:
    - Input:  [['x','x','o'],
               ['o','o','x'],
               ['x','x','x']]
    - Output: 'x wins!'
*/

function createNewGame() {
    let board = []

    for(let i = 1; i <= 3; i++) {
        let row = [null, null, null]
        //.push()
        board.push(row)
    }
    
    console.log(board)
}

createNewGame()



//Creating an object using object literal syntax

// const obj = {
//     key: value,
//     key: value,
//     key: value
// }



//Object Demo
const person = {
    name: 'Mavis Beacon', //string
    age: 36, //number
    hasPets: true, //boolean
    pets: ['dog','cat','bird'], //array
    hobbies: ['reading', 'traveling', 'cooking'],
    address: {
      street: '123 Main St',
      city: 'San Francisco',
      state: [{
          name: 'California',
          town: ['LA']
      }, "hot"]
    }, //object
    greeting: function() {
      return `Hello, my name is ${this.name}`;
    } //function
};


//Accessing Properties

    //Dot notation
        person.hasPets //true
        let checkIfHasPets = person.hasPets // true
    //Bracket notation
         person['hasPets']
        console.log('HAS PETS? ', person['hasPets'])
        // Make sure to wrap the key with quotations when using bracket notation

    //Nested properties
        person.pets[1] // 'cat'

        //
        console.log("Adrian test 1: ", person['address']['state'][0]['town'][0])

        console.log("Fatima ", person.address.state[0].town)
        console.log("Fatima ", person.address.state[0].town[0])
        console.log("Jonathan ", person.address.state[0].town[0])
        console.log("Tani ", person.address.state[0]['town'][0]);

    //add, modify, and delete properties
    //add a key value pair
    person.favoriteColor = 'Purple'
    console.log(person)
    //person["favoriteFood"] = 25 // ?????????


    //modify
    person.hasPets = false

    //delete
    delete person.hobbies

    console.log('deleted hobbies ', person)


//How to loop through an object

    //for in loop
    for(let key in person) {
        console.log('KEY ', key)
        //How to access keys and values in a loop
        person[key] //person.key
    }

    //person['name']
    //person['age']
    //person['hasPets']
    //...

//Object.keys(object) // this will return an array with all the keys as strings

const keyNames = Object.keys(person)
console.log(keyNames)
    

