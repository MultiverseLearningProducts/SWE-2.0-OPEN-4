function sayHello(first, last) {
    return `Greetings ${first} ${last}! Hope you are having a great day.`
}

function sayYourName(first, last) {
    return sayHello(first, last)
}

function printGreeting(first,last) {
    const result = sayYourName(first,last)
    console.log(result)
    return
}

printGreeting('Surafel')
