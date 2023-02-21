//Solving for Even or Odd using Indirect Recursion: 
function isEven(n){

    //Base Case
    if(n == 0){
      return true;
    }
  
    //Recursive Case
    return isOdd(n-1);
  }
  
  function isOdd(n){
    //Base Case
    if(n == 0){
      return false;
    }
    
    //Recursive Case
    return isEven(n-1);
  }

console.log(isOdd(18));