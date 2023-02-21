/* 
1. Write a function called countDown that uses recursion to count down from 10 to 1.
2. Write a function called empty this array that uses recursion to remove all elements of an array
*/

function countDown(number) {
    //base Case - aka the stopping point - 
    if(number === 1) {
        console.log(1)
        return 
    }   
    //recursive Case
    console.log(number)
    countDown(number - 1)
}

countDown(10)

// 
//call stack



function emptyThisArray(arr) {
    //base Case - when the array has no elements aka []
    if(arr.length < 1) {
        return
    }

    //recursive Case - if there are still elements in the array
    arr.pop()
    emptyThisArray(arr)
}
