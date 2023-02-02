/* WARM UP 
1. Write a function isPalindrome that determines whether a string is a palindrome or not.
    - A palindrome is a word that is the same forward and backwards: ex: racecar, bob, abba
    - Hint: You can use .split('') -> ex: const name = 'william' // ["w","i","l","l","i","a","m"]
    - Hint: Think of an array method we learned that might assist you. As a challenge, don't use any array methods!

2. You and a friend are trying to create a tic, tac, toe game. One of the functions you are trying to write is to generate a new board. Write a function createNewGame that will create an empty tic,tac,toe board!
    - Output: `[null,null,null],
               [null,null,null],
               [null,null,null]`

    ** Super Extension (solution will be released EOD): write a function that will determine if there is a winner for a tic,tac,toe match:
    - Input:  `['x','x','o'],
               ['o','o','x'],
               ['x','x','x']`
    - Output: 'x wins!'
*/

//Creating an object using object literal syntax





//Object Demo
const person = {
    name: 'Mavis Beacon',
    age: 36,
    hasPets: true,
    pets: ['dog','cat','bird'],
    hobbies: ['reading', 'traveling', 'cooking'],
    address: {
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA'
    },
    greeting: function() {
      return `Hello, my name is ${this.name}`;
    }
};


//Accessing Properties

    //Dot notation

    //Bracket notation

    //Nested properties

    //add, modify, and delete properties


//How to loop through an object

    //for in loop

    //How to access keys and values in a loop

