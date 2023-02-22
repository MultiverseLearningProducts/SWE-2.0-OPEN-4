const sayName = (name) => {
    console.log(`Hello ${name}`)
    return `Hello ${name}`
}

const helloStr = 'hello world!'

const sayPhrase = () => {
    console.log(`Fullstack development is easy!`)
    return `Fullstack development is easy!`
}

const favoriteColor = (color) => {
    console.log(`My favorite color is ${color}`)
}

const displayValuesInArray = (arr) => {
    arr.map((item) => {
        console.log(`This is the current item = `, item)
    })
}


//If your current file only has one thing, you can use
// export default nameOfFunction


//exporting multiple functions
export {
    sayName,
    helloStr,
    sayPhrase,
    favoriteColor,
    displayValuesInArray 
}