// Warm Up: Create an Array and Reverse its Contents

// 1. Create an Array
// 2. Reverse its Contents

// How do we create an array?
const arr = [1, 2, 3, 4, 5]; // [5, 4, 3, 2, 1]

// How would reverse the array we declared "arr"
function reverse(arr) {
  //Loop it backwards

  const newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    // Push every result of every iteration to the new array then return it 
    newArr.push(arr[i]);
  }

  return newArr;
}

// console.log(reverse(arr))


// Recursive Factorial
// This is like the "Hello World" of Recusion

// What is Factorial?
//  the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point.

// Example: 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7
// 4! = 1 * 2 * 3 * 4
// 2! = 1 * 2

//num = 1 * 2 * ... * (n - 1) * n

//num = 1! -> 1


function fact(num) {
  // Base Case
  if (num <= 1) {
    return 1;
  }

  // Recursive Case
  return num * fact(num - 1) // 1
}

// console.log(fact(5))


// 5! -> (5 * 1) * (4 * 1) * (3 * 1) * (2 * 1) * (1) -> 120

// REVERSE STRING PROBLEM: 

// Example: "a" -> "a"
// "l" -> "l"
// "" -> ""
// "lo" -> "ol"
//"Elvis"
  // - s + "ivlE" -> "sivlE"
  // - i + "vlE" -> "ivlE"
  // - v + "vlE"
  // - l + "E" -> "lE"
  // - "E"


function reverseStr(str) {
  // Base Case
  if (str.length <= 1) {
    return str;
  }

  // Recursive Case
    // We are decreasing the length of the string
    // We are returning a new string 
  let lastCharacterPosition = str.length - 1; 
  return str.charAt(lastCharacterPosition) + reverseStr(str.substring(0, lastCharacterPosition))
  
}

// console.log(reverseStr("Elvis"))

function evenOrOdd(num){
  //Base Case
  if(num == 0){
    return "Your Number is Even";
  }

  if(num == 1){
    return "Your Number is Odd";
  }

  //Recursion Case
  return evenOrOdd(num - 2)
}

// console.log(evenOrOdd(1197))



//Concatenation: 
  // Adding two or more strings together

let str1 = "Elv";
let str2 = "is";

console.log(str1 + str2);