/* warm up */

/*
    This string is composed of team players. Determine if the game is balanced. A game is balanced if there are equal amount of players.
    If the game is balanced -> return the string 'game is balanced!'
    If the game is unbalanced -> return a string 'game is unbalanced! Team ${team that has more} is more likely to win!'

    Input: 'xxooxo' Output: 'game is balanced!'
    Input: 'xxxxoxo' Output: 'game is unbalanced! Team x is more likely to win!'
    Input: 'xXxoOo' Output: 'game is balanced!'

    Hint: 
    1. Use a loop. To access a character in a string: 
    //            0123
    const name = 'abcd' // access by index
    name[2] // 'c'
    2. you might want to use .toUpperCase() or .toLowerCase()
    3. .length is a handy boundary for your for loop
*/

//ES6 arrow function
const findBalance = (team) => {
    team = team.toLowerCase() // changes all characters to lower case

    let x = 0
    let o = 0

    //iterate through the string and count all the xs and os
    for(let i = 0; i < team.length; i++) {
        let char = team[i]
        if(char === 'x') {
            x++
        } else if(char === 'o') {
            o++
        }
    }

    //determine if the game is balanced
    if(x === o) {
        return `The game is balanced`
    } else if (x > o) {
        return `The game is unbalanced. Team x is more likely to win`
    } else {
        return `The game is unbalanced. Team y is more likely to win`
    }

}

//How to create an array
//index         0           1         2     3  4
//const arr = ['Daniel', 'Surafel', 'Tani', 3, 5]

//How to access items in an array
            //  0         1         2     3  4
//const arr = ['Daniel', 'Surafel', 'Tani', 3, 5]

//console.log('ACCESSING ARRAY AT INDEX 1 ', arr[4])


//.length 
//             0          1         2     3  4  
const arr = ['Daniel', 'Surafel', 'Tani', 3, 5]

arr.length // 5

//accessing the first element
arr[0]
//accessing the last element
arr[arr.length - 1]


//--------------------------------------------------------------------//
//COMMON ARRAY METHODS

// push() - adds elements to the end of the array
const arr1 = [1, 'two', false];
arr1.push(3,'four', true) // [1, 'two', false, 3,'four', true]
//console.log(arr1)

// pop() - removes the last element of the array
const arr2 = [1, 'two', false];
arr2.pop() //[1, 'two']
//console.log(arr2)

// unshift() - adds elements to the beginning of the array
const arr3 = [1, 'two', false];
arr3.unshift(false, null) // [ false, null, 1, 'two', false ]
//console.log(arr3)

// shift() - removes the first element of the array
const arr4 = [1, 'two', false];
arr4.shift() //['two', false]
//console.log(arr4)

// reverse() - reverses the order of the elements in the array
const arr5 = [1,2,3,'hello']
arr5.reverse()
//console.log(arr5)
//** can be used if asked if a string is a palindrome

// concat() - combines two or more arrays into a new array
const arrA = ['Hello there']
const arrB = ['Glue me together']
//['Hello there'] + ['Glue me together'] // ['Hello there', 'Glue me together']
const newArr = arrA.concat(arrB)
//console.log(newArr)

// join() - joins all elements of an array into a string.
const toJoinArr = ['I','want','to','be','a','sentence']
console.log(toJoinArr.join(' '))

//--------------------------------------------------------------------//
//Slightly more advanced methods

// splice() - adds or removes elements anywhere in the array
//.splice(startIdx, deleteCount, item1, item2,...itemN)

//add an item using splice()
//                   0    1   2   3   4
const arrOriginal = ['a','b','c','d','e']
arrOriginal.splice(2, 0, 'HELLO!')
//console.log(arrOriginal)

//delete an element using .splice()
//                    0   1   2   3   4
const arrToDelete = ['a','b','c','d','e']
arrToDelete.splice(1, 2)
//console.log(arrToDelete) //[ 'a', 'd', 'e' ]


// slice() - returns a new array with a portion of the original array
            //             0   1   2   3  4
const arrSliceOriginal = ['a','b','c', 4, 5]
//.slice(startIdx, endIdx(not inclusive))
const newSlicedArr = arrSliceOriginal.slice(1,4) // ['b','c', 4]
console.log('SLICED ARRAY! ', newSlicedArr)

//.map()
const arrToMap = ['Aaron', 'Rachel', 'Axl', 'Collin', 'Fatoumata', 'Kim']
const greetingArr = arrToMap.map((name, idx) => {
        return `Hello ${name}`
})
// console.log('arrToMap = ', arrToMap)
// console.log('greetingArr = ', greetingArr)


//.forEach() - mutates our original array
//                  0         1        2
const arrNames = ['Aaron', 'Rachel', 'Axl']

arrNames.forEach((name, idx) => {
        //reassign value that lives in that index
        arrNames[idx] = `Hello ${name}`
})

console.log('ARRNAMES = ', arrNames)