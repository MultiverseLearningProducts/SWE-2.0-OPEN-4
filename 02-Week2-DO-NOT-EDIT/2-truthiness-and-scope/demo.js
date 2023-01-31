// // Pair programming warm-up (10 mins): 

// // Write a function, sentencePrinter, that takes in 2 arguments, called `sentence` and `count`,
// // that prints out the `sentence` `count` number of times.

// function sentencePrinter(sentence, count) {
//   for (let i = 0; i < count; i++) {
//     console.log(sentence);
//   }
// }

// sentencePrinter('hello there!', 6);

//Explicit Coercion
// let num = 10;
// console.log(typeof num);
// let str = String(num);
// console.log(typeof str);

//Implicit Coercion
// let sum = 10 + 20;
// let concatString = '10' + '20';
// let notSure = 10 + '20';

// console.log(sum);
// console.log(concatString);
// console.log(notSure);

// let testString = '10' + 20 + 30 + 40 + 50;
// console.log(testString);

// console.log(true == '1');

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(-0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// if (!!10) {
//   console.log('in the if');
// } else {
//   console.log('in the else');
// }

//Scopes

// functional scope
// function aFunction() {
//   if (!!('variable')) {
//     var test = 'hello';
//   }
//   else {
//     console.log('in the else');
//   }

//   console.log(test);
// }

// aFunction();

function wow(){
  let x = 1;
  if(x === 1){
      var y = 'wow'
  }
  return y;
}


function wow2(){

  let x = 1; 
  if(x===1){
      let z = 'wow'
  }
  return z;
}


console.log(wow())
console.log(wow2())

// Global Scope

let PI = 3.14;
console.log(PI);

