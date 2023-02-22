//1. a function that can add two numbers together
//2. a function that can reverse a string
//3. a function that determines if an email is in the correct format (@gmail.com)


// imports 
const { sumOfTwo, strReverse } = require('../functions')

//describe function - is used to group related tests together in a single logical unit. It takes two arguments, the first argument is a string that describes the tests, the second argument is a callback function that will contain the tests itself

describe('tests to determine if our functions are giving us our expected results', () => {
    //test function - used to define a single test case
    test('the function should return the correct sum', () => {
        const sum1 = sumOfTwo(2,3)
        const sum2 = sumOfTwo(-4, -3)
        //expect function - this function is used to define an expectation from our test case
        //toBe - this is a matcher that can be used with the expect function - returns a boolean
        expect(sum1).toBe(5)
        expect(sum2).toBe(-7)
    })

    test('our function should return a reversed string', () => {
        const reversedStr = strReverse('abcd')
        const reversedStr2 = strReverse('')

        expect(reversedStr).toBe('dcba')
        expect(reversedStr2).toBe('')
    })
})

