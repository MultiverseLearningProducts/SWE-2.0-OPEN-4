function evenOrOdd(number){

    //BASE CASE 1
    if(number == 0){
        return "Your Number is Even";
    }

    //BASE CASE 2
    if(number == 1){
        return "Your Number is Odd";
    }

    //RECURSIVE CASE
    return evenOrOdd(number - 2);
}

console.log(evenOrOdd(117));